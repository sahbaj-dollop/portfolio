import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

export const WeatherContext = createContext(null)

// City presets for instant testing of different weather conditions
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
    name: 'Reykjavik, Iceland',
    lat: 64.1466,
    lon: -21.9426,
    forceCondition: 'snow',
    temp: -1,
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
    city: 'Detecting...',
    country: '',
    temp: null,
    weatherCode: 0,
    condition: 'clear', // 'snow' | 'rain' | 'clear' | 'cloudy'
    precipitation: 0,
    snowfall: 0,
    isDay: true,
    loading: true,
    error: null,
  })

  // Effect mode: 'auto' (follow live weather) | 'snow' | 'rain' | 'ambient' | 'off'
  const [effectMode, setEffectMode] = useState(() => {
    return localStorage.getItem('portfolioEffectMode') || 'auto'
  })

  // Snow / Particle intensity: 'light' | 'normal' | 'heavy'
  const [intensity, setIntensity] = useState(() => {
    return localStorage.getItem('portfolioWeatherIntensity') || 'normal'
  })

  const [activePreset, setActivePreset] = useState('Current Location')

  // Save preferences
  useEffect(() => {
    localStorage.setItem('portfolioEffectMode', effectMode)
  }, [effectMode])

  useEffect(() => {
    localStorage.setItem('portfolioWeatherIntensity', intensity)
  }, [intensity])

  // Map WMO code to human-friendly condition & effect
  const parseCondition = (code, snowfall = 0, rain = 0, temp = 20) => {
    // Snow codes: 56, 57 (Freezing drizzle), 66, 67 (Freezing rain), 71, 73, 75 (Snowfall), 77 (Snow grains), 85, 86 (Snow showers)
    const snowCodes = [56, 57, 66, 67, 71, 73, 75, 77, 85, 86]
    // Rain codes: 51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99
    const rainCodes = [51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99]

    if (snowCodes.includes(code) || snowfall > 0 || (temp <= 1 && rain > 0)) {
      return { condition: 'snow', label: 'Snowfall ❄️' }
    }
    if (rainCodes.includes(code) || rain > 0.2) {
      return { condition: 'rain', label: 'Rainy 🌧️' }
    }
    if (code === 0 || code === 1) {
      return { condition: 'clear', label: 'Clear Sky ☀️' }
    }
    return { condition: 'cloudy', label: 'Cloudy ⛅' }
  }

  // Fetch weather for given coordinates
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

      // If city name is missing, reverse geocode
      if (!city) {
        try {
          const geoRes = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
          )
          if (geoRes.ok) {
            const geoData = await geoRes.json()
            city = geoData.city || geoData.locality || geoData.principalSubdivision || 'Unknown'
            country = geoData.countryName || ''
          }
        } catch {
          city = 'Local Area'
        }
      }

      const parsed = forced 
        ? { condition: forced, label: forced === 'snow' ? 'Snowfall ❄️' : forced === 'rain' ? 'Rainy 🌧️' : 'Clear ☀️' }
        : parseCondition(
            current.weather_code ?? 0, 
            current.snowfall ?? 0, 
            current.rain ?? current.precipitation ?? 0, 
            current.temperature_2m ?? 20
          )

      setWeatherData({
        city: city || 'Local Area',
        country: country || '',
        temp: Math.round(current.temperature_2m ?? 20),
        weatherCode: current.weather_code ?? 0,
        condition: parsed.condition,
        conditionLabel: parsed.label,
        precipitation: current.precipitation ?? 0,
        snowfall: current.snowfall ?? 0,
        isDay: Boolean(current.is_day ?? 1),
        loading: false,
        error: null
      })
    } catch (err) {
      console.warn('Weather fetch fallback triggered:', err)
      // Fallback graceful values
      setWeatherData({
        city: cityName || 'Indore',
        country: countryName || 'India',
        temp: 24,
        weatherCode: 0,
        condition: forced || 'clear',
        conditionLabel: 'Clear ☀️',
        precipitation: 0,
        snowfall: 0,
        isDay: true,
        loading: false,
        error: err.message
      })
    }
  }, [])

  // Auto detect user location
  const detectAndFetchUserLocation = useCallback(async () => {
    setActivePreset('Current Location')

    // Helper to fall back to IP
    const fallbackToIp = async () => {
      try {
        const res = await fetch('https://get.geojs.io/v1/ip/geo.json')
        if (!res.ok) throw new Error('IP geo failed')
        const ipData = await res.json()
        const lat = parseFloat(ipData.latitude)
        const lon = parseFloat(ipData.longitude)
        await fetchWeatherForCoords(lat, lon, ipData.city, ipData.country)
      } catch (err) {
        console.warn('IP fallback failed, using default coords:', err)
        await fetchWeatherForCoords(22.7196, 75.8577, 'Indore', 'India')
      }
    }

    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          await fetchWeatherForCoords(lat, lon)
        },
        async (error) => {
          console.info('Geolocation prompt rejected or unavailable, falling back to IP detection:', error.message)
          await fallbackToIp()
        },
        { timeout: 5000, maximumAge: 600000 }
      )
    } else {
      await fallbackToIp()
    }
  }, [fetchWeatherForCoords])

  // Select a preset location
  const selectPreset = (preset) => {
    setActivePreset(preset.name)
    if (preset.type === 'gps') {
      detectAndFetchUserLocation()
    } else {
      fetchWeatherForCoords(preset.lat, preset.lon, preset.name.split(',')[0], preset.name.split(',')[1] || '', preset.forceCondition)
    }
  }

  // Initial load
  useEffect(() => {
    detectAndFetchUserLocation()
  }, [detectAndFetchUserLocation])

  // Computed active visual effect
  // If effectMode === 'auto', effect follows weatherData.condition
  // If user forced 'snow' / 'rain' / 'ambient' / 'off', use that directly
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
        refreshLocation: detectAndFetchUserLocation,
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

