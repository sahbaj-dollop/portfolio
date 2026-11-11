import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import toast from 'react-hot-toast'

export const WeatherContext = createContext(null)

// Weather simulator presets
export const WEATHER_PRESETS = [
  {
    name: 'Current Location',
    type: 'gps',
  },
  {
    name: 'Gulmarg, Kashmir',
    lat: 34.0484,
    lon: 74.3805,
    forceCondition: 'snow',
    temp: -3,
    type: 'preset'
  },
  {
    name: 'Manali, H.P.',
    lat: 32.2432,
    lon: 77.1892,
    forceCondition: 'snow',
    temp: 0,
    type: 'preset'
  },
  {
    name: 'London, UK (Rain)',
    lat: 51.5074,
    lon: -0.1278,
    forceCondition: 'rain',
    temp: 11,
    type: 'preset'
  },
  {
    name: 'Reykjavik, Iceland',
    lat: 64.1466,
    lon: -21.9426,
    forceCondition: 'snow',
    temp: -1,
    type: 'preset'
  },
  {
    name: 'Indore, India (Clear)',
    lat: 22.7196,
    lon: 75.8577,
    forceCondition: 'clear',
    temp: 28,
    type: 'preset'
  }
]

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({
    city: 'Indore',
    country: 'India',
    temp: 26,
    weatherCode: 0,
    condition: 'clear', // 'snow' | 'rain' | 'clear' | 'cloudy'
    conditionLabel: 'Clear Sky ☀️',
    precipitation: 0,
    snowfall: 0,
    isDay: true,
    loading: false,
    error: null,
  })

  // Visual Effect mode: 'auto' (follow live weather) | 'snow' | 'rain' | 'ambient' | 'off'
  const [effectMode, setEffectMode] = useState(() => {
    return localStorage.getItem('portfolioEffectMode') || 'auto'
  })

  // Snow / Particle intensity: 'light' | 'normal' | 'heavy'
  const [intensity, setIntensity] = useState(() => {
    return localStorage.getItem('portfolioWeatherIntensity') || 'normal'
  })

  const [activePreset, setActivePreset] = useState('Indore, India (Clear)')

  // Location Consent Modal state
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
  const [locationStatus, setLocationStatus] = useState('idle') // 'idle' | 'requesting' | 'fetching' | 'success' | 'error'
  const [locationError, setLocationError] = useState(null)

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('portfolioEffectMode', effectMode)
  }, [effectMode])

  useEffect(() => {
    localStorage.setItem('portfolioWeatherIntensity', intensity)
  }, [intensity])

  /**
   * Parse WMO weather code & temperature to determine dynamic atmospheric fall
   * Requirement:
   * - If rainy -> rainfall effect
   * - If temperature < 25°C -> snowfall effect
   * - Else -> ambient particle glow
   */
  const parseCondition = useCallback((code, snowfall = 0, rain = 0, temp = 20) => {
    // Snow-related WMO codes: 56, 57 (Freezing drizzle), 66, 67 (Freezing rain), 71, 73, 75 (Snowfall), 77 (Snow grains), 85, 86 (Snow showers)
    const snowCodes = [56, 57, 66, 67, 71, 73, 75, 77, 85, 86]
    // Rain-related WMO codes: 51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99
    const rainCodes = [51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99]

    const isRain = rainCodes.includes(code) || rain > 0.1
    const isSnowCode = snowCodes.includes(code) || snowfall > 0

    // 1. If rainy -> rainfall
    if (isRain) {
      return { 
        condition: 'rain', 
        label: 'Rainfall 🌧️',
        effect: 'rain'
      }
    }

    // 2. If temperature is below 25°C or explicit snow code -> snowfall
    if (temp < 25 || isSnowCode) {
      return { 
        condition: 'snow', 
        label: `Snowfall ❄️ (${temp}°C < 25°C)`,
        effect: 'snow'
      }
    }

    // 3. If temperature >= 25°C and clear sky
    if (code === 0 || code === 1) {
      return { 
        condition: 'clear', 
        label: `Clear Sky ☀️ (${temp}°C)`,
        effect: 'ambient'
      }
    }

    // 4. Cloudy but warm (>= 25°C)
    return { 
      condition: 'cloudy', 
      label: `Cloudy ⛅ (${temp}°C)`,
      effect: 'ambient'
    }
  }, [])

  /**
   * Reverse Geocode coordinates using OpenStreetMap (OSM) Nominatim API
   */
  const reverseGeocodeOSM = useCallback(async (lat, lon) => {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`
      const res = await fetch(url, {
        headers: {
          'Accept-Language': 'en'
        }
      })
      if (!res.ok) throw new Error('OSM Reverse Geocode failed')
      const data = await res.json()
      const addr = data.address || {}
      const city = addr.city || addr.town || addr.village || addr.municipality || addr.suburb || addr.state_district || addr.county || data.name || 'Local Area'
      const country = addr.country || ''
      return { city, country, displayName: data.display_name || '' }
    } catch (err) {
      console.warn('OpenStreetMap reverse geocode fallback:', err)
      // Fallback in case of temporary OSM rate limiting
      try {
        const fallbackRes = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
        )
        if (fallbackRes.ok) {
          const fallbackData = await fallbackRes.json()
          return {
            city: fallbackData.city || fallbackData.locality || fallbackData.principalSubdivision || 'Local Area',
            country: fallbackData.countryName || '',
            displayName: ''
          }
        }
      } catch {
        // pass
      }
      return { city: 'Local Area', country: '', displayName: '' }
    }
  }, [])

  /**
   * Search cities using OpenStreetMap (OSM) Nominatim Search API
   */
  const searchOSMCities = useCallback(async (query) => {
    if (!query || query.trim().length < 2) return []
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`
      const res = await fetch(url, {
        headers: {
          'Accept-Language': 'en'
        }
      })
      if (!res.ok) return []
      const data = await res.json()
      return data.map((item) => {
        const addr = item.address || {}
        const city = addr.city || addr.town || addr.village || addr.municipality || item.name || item.display_name.split(',')[0]
        const country = addr.country || ''
        return {
          city,
          country,
          displayName: item.display_name,
          lat: parseFloat(item.lat),
          lon: parseFloat(item.lon)
        }
      })
    } catch (err) {
      console.warn('OSM search error:', err)
      return []
    }
  }, [])

  /**
   * Fetch weather for coordinates using Open-Meteo API
   */
  const fetchWeatherForCoords = useCallback(async (lat, lon, cityName = '', countryName = '', forced = null) => {
    try {
      setWeatherData(prev => ({ ...prev, loading: true }))

      // Fetch live weather from Open-Meteo
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,snowfall,weather_code,is_day&timezone=auto`
      )

      if (!response.ok) {
        throw new Error('Weather API request failed')
      }

      const data = await response.json()
      const current = data.current || {}

      let city = cityName
      let country = countryName

      // If city name is missing, reverse geocode via OSM API
      if (!city) {
        const osmLocation = await reverseGeocodeOSM(lat, lon)
        city = osmLocation.city
        country = osmLocation.country
      }

      const tempValue = Math.round(current.temperature_2m ?? 20)
      
      const parsed = forced 
        ? { 
            condition: forced, 
            label: forced === 'snow' ? `Snowfall ❄️ (${tempValue}°C)` : forced === 'rain' ? `Rainfall 🌧️ (${tempValue}°C)` : `Clear ☀️ (${tempValue}°C)`,
            effect: forced === 'snow' ? 'snow' : forced === 'rain' ? 'rain' : 'ambient'
          }
        : parseCondition(
            current.weather_code ?? 0, 
            current.snowfall ?? 0, 
            current.rain ?? current.precipitation ?? 0, 
            tempValue
          )

      const updated = {
        city: city || 'Local Area',
        country: country || '',
        temp: tempValue,
        weatherCode: current.weather_code ?? 0,
        condition: parsed.condition,
        conditionLabel: parsed.label,
        precipitation: current.precipitation ?? 0,
        snowfall: current.snowfall ?? 0,
        isDay: Boolean(current.is_day ?? 1),
        loading: false,
        error: null
      }

      setWeatherData(updated)
      return updated
    } catch (err) {
      console.warn('Weather fetch error:', err)
      const fallback = {
        city: cityName || 'Indore',
        country: countryName || 'India',
        temp: 24,
        weatherCode: 0,
        condition: forced || 'snow', // 24°C is < 25°C -> snow
        conditionLabel: forced === 'rain' ? 'Rainfall 🌧️' : 'Snowfall ❄️ (24°C < 25°C)',
        precipitation: 0,
        snowfall: 0,
        isDay: true,
        loading: false,
        error: err.message
      }
      setWeatherData(fallback)
      return fallback
    }
  }, [reverseGeocodeOSM, parseCondition])

  /**
   * Request user location when user explicitly clicks "Accept" in the custom modal
   */
  const requestLocationWithConsent = useCallback(async () => {
    setLocationStatus('requesting')
    setLocationError(null)

    if (typeof window === 'undefined' || !('geolocation' in navigator)) {
      setLocationStatus('error')
      setLocationError('Geolocation is not supported by your browser.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLocationStatus('fetching')
          const lat = position.coords.latitude
          const lon = position.coords.longitude

          // 1. Get city from OpenStreetMap (OSM) API
          const osmLoc = await reverseGeocodeOSM(lat, lon)

          // 2. Fetch live weather & determine snowfall/rainfall
          const result = await fetchWeatherForCoords(lat, lon, osmLoc.city, osmLoc.country)

          // 3. Mark consent as accepted in localStorage
          localStorage.setItem('portfolioLocationConsent', 'accepted')
          localStorage.setItem('portfolioUserCoords', JSON.stringify({
            lat,
            lon,
            city: osmLoc.city,
            country: osmLoc.country
          }))

          setActivePreset('Current Location')
          setEffectMode('auto') // Follow live weather automatically
          setLocationStatus('success')
          setIsLocationModalOpen(false)

          // 4. Celebratory Toast notification
          const effectText = result.condition === 'rain' 
            ? '🌧️ Rainfall effect active' 
            : result.condition === 'snow' 
            ? '❄️ Snowfall effect active (< 25°C)' 
            : '☀️ Clear sky ambient glow active'

          toast.success(
            `Location synced: ${result.city} (${result.temp}°C). ${effectText}!`,
            { duration: 5000 }
          )
        } catch (err) {
          console.error('Error processing location:', err)
          setLocationStatus('error')
          setLocationError('Failed to fetch weather for your location. Please try searching your city below.')
        }
      },
      (error) => {
        console.warn('Geolocation permission error:', error.message)
        setLocationStatus('error')
        if (error.code === error.PERMISSION_DENIED) {
          setLocationError('Location permission was denied. You can search your city manually below using OpenStreetMap (OSM).')
        } else {
          setLocationError('Location detection timed out or failed. Please search your city manually below.')
        }
      },
      { timeout: 10000, maximumAge: 300000, enableHighAccuracy: false }
    )
  }, [reverseGeocodeOSM, fetchWeatherForCoords])

  /**
   * Select a city returned from OpenStreetMap search
   */
  const selectOSMCity = useCallback(async (cityItem) => {
    try {
      setLocationStatus('fetching')
      const result = await fetchWeatherForCoords(cityItem.lat, cityItem.lon, cityItem.city, cityItem.country)
      
      localStorage.setItem('portfolioLocationConsent', 'accepted')
      localStorage.setItem('portfolioUserCoords', JSON.stringify(cityItem))
      
      setActivePreset(cityItem.city)
      setEffectMode('auto')
      setLocationStatus('success')
      setIsLocationModalOpen(false)

      const effectText = result.condition === 'rain' 
        ? '🌧️ Rainfall effect active' 
        : result.condition === 'snow' 
        ? '❄️ Snowfall effect active (< 25°C)' 
        : '☀️ Clear sky ambient glow active'

      toast.success(
        `Location set to ${cityItem.city} (${result.temp}°C). ${effectText}!`,
        { duration: 4500 }
      )
    } catch (err) {
      console.error('Error selecting OSM city:', err)
      toast.error('Failed to load weather for selected city.')
    }
  }, [fetchWeatherForCoords])

  /**
   * Select preset location (Manali, London, etc.)
   */
  const selectPreset = useCallback((preset) => {
    setActivePreset(preset.name)
    if (preset.type === 'gps') {
      requestLocationWithConsent()
    } else {
      fetchWeatherForCoords(
        preset.lat, 
        preset.lon, 
        preset.name.split(',')[0], 
        preset.name.split(',')[1] || '', 
        preset.forceCondition
      )
    }
  }, [requestLocationWithConsent, fetchWeatherForCoords])

  /**
   * Open / Close modal
   */
  const openLocationModal = useCallback(() => {
    setLocationError(null)
    setLocationStatus('idle')
    setIsLocationModalOpen(true)
  }, [])

  const closeLocationModal = useCallback(() => {
    setIsLocationModalOpen(false)
    // If not already decided, mark dismissed for this session
    if (!localStorage.getItem('portfolioLocationConsent')) {
      localStorage.setItem('portfolioLocationConsent', 'dismissed')
    }
  }, [])

  /**
   * Initial page load behavior:
   * DO NOT prompt browser geolocation immediately without consent!
   * Show default weather first, and display custom modal if user hasn't made a choice yet.
   */
  useEffect(() => {
    const consent = localStorage.getItem('portfolioLocationConsent')

    if (consent === 'accepted') {
      // User previously accepted; reload their saved coords or re-detect silently
      const savedCoords = localStorage.getItem('portfolioUserCoords')
      if (savedCoords) {
        try {
          const { lat, lon, city, country } = JSON.parse(savedCoords)
          fetchWeatherForCoords(lat, lon, city, country)
        } catch {
          fetchWeatherForCoords(22.7196, 75.8577, 'Indore', 'India')
        }
      } else {
        fetchWeatherForCoords(22.7196, 75.8577, 'Indore', 'India')
      }
    } else if (consent === 'dismissed') {
      // User dismissed before; load default Indore weather silently
      fetchWeatherForCoords(22.7196, 75.8577, 'Indore', 'India')
    } else {
      // First-time visitor: load default weather first, then smoothly open custom modal after page load!
      fetchWeatherForCoords(22.7196, 75.8577, 'Indore', 'India')
      const timer = setTimeout(() => {
        setIsLocationModalOpen(true)
      }, 900)
      return () => clearTimeout(timer)
    }
  }, [fetchWeatherForCoords])

  // Computed visual effect based on effectMode and weather condition
  // When effectMode === 'auto', condition 'snow' -> 'snow', 'rain' -> 'rain', others -> 'ambient'
  const activeEffect = effectMode === 'auto'
    ? (weatherData.condition === 'snow' ? 'snow' : weatherData.condition === 'rain' ? 'rain' : 'ambient')
    : effectMode

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        effectMode,
        setEffectMode,
        intensity,
        setIntensity,
        activeEffect,
        activePreset,
        selectPreset,
        isLocationModalOpen,
        setIsLocationModalOpen,
        openLocationModal,
        closeLocationModal,
        requestLocationWithConsent,
        searchOSMCities,
        selectOSMCity,
        locationStatus,
        locationError,
        presets: WEATHER_PRESETS
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeather = () => {
  const context = useContext(WeatherContext)
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider')
  }
  return context
}
