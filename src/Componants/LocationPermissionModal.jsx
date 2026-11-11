import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  CloudRain, 
  CloudSnow, 
  Sun, 
  Sparkles, 
  ShieldCheck, 
  Search, 
  X, 
  Check, 
  Loader2, 
  Navigation,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react'
import { useWeather } from '../Context/WeatherContext'
import { useTheme } from '../Context/ThemeContext'

const LocationPermissionModal = () => {
  const { 
    isLocationModalOpen, 
    closeLocationModal, 
    requestLocationWithConsent, 
    searchOSMCities, 
    selectOSMCity, 
    locationStatus, 
    locationError,
    weatherData,
    presets,
    selectPreset
  } = useWeather()
  
  const { darkMode } = useTheme()

  // Manual OSM search state
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const searchTimeoutRef = useRef(null)

  // Handle OSM search input with debouncing
  useEffect(() => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    setIsSearching(true)
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const results = await searchOSMCities(searchQuery)
        setSearchResults(results)
      } catch (err) {
        console.error('OSM Search failed:', err)
        setSearchResults([])
      } finally {
        setIsSearching(false)
      }
    }, 450)

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [searchQuery, searchOSMCities])

  if (!isLocationModalOpen) return null

  const isRequesting = locationStatus === 'requesting' || locationStatus === 'fetching'

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeLocationModal}
      >
        <motion.div
          className={`relative w-full max-w-xl my-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col border transition-all ${
            darkMode 
              ? 'bg-[#090e13]/95 border-[rgba(171,201,203,0.25)] text-white shadow-black/90' 
              : 'bg-white/95 border-[#abc9cb] text-[#081014] shadow-[0_25px_50px_-12px_rgba(171,201,203,0.35)]'
          }`}
          initial={{ scale: 0.92, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.92, y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Decorative Color Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#f45b0b] via-[#abc9cb] to-[#f45b0b]" />

          {/* Close Button */}
          <button
            onClick={closeLocationModal}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="p-6 sm:p-7 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#f45b0b]/15 text-[#f45b0b] border border-[#f45b0b]/30">
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Atmospheric Experience</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#abc9cb]">
                <span>via OpenStreetMap</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-1">
              Personalize Your Weather Experience
            </h3>

            {/* Crucial Banner Requested by User */}
            <div className={`mt-3 p-3.5 rounded-2xl border flex items-start gap-3 ${
              darkMode 
                ? 'bg-[#0f171e] border-[rgba(171,201,203,0.3)] text-slate-200' 
                : 'bg-[#edf5f6] border-[#abc9cb] text-slate-800'
            }`}>
              <div className="p-2 rounded-xl bg-[#f45b0b]/15 text-[#f45b0b] shrink-0 mt-0.5">
                <Navigation className="w-4 h-4 animate-pulse" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-[#f45b0b]">
                  Please accept this for a better user experience
                </p>
                <p className={`mt-0.5 text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  We synchronize live weather from your real-time location using OpenStreetMap APIs to render immersive visual atmospheric effects right onto your screen.
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Weather Rules Display */}
          <div className="px-6 sm:px-7 space-y-2.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#abc9cb] flex items-center justify-between">
              <span>Dynamic Sky Rules</span>
              <span className="text-[10px] text-slate-400 font-normal">Real-time Open-Meteo & OSM</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Rain Rule */}
              <div className={`p-3 rounded-xl border flex items-center gap-3 ${
                darkMode ? 'bg-[#0c141b] border-slate-800' : 'bg-[#f4fafb] border-[#abc9cb]/60'
              }`}>
                <div className="p-2 rounded-lg bg-sky-500/15 text-sky-400">
                  <CloudRain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">Rainfall Animation 🌧️</h4>
                  <p className="text-[11px] text-slate-400">
                    If it is raining in your area, realistic raindrops fall across the screen.
                  </p>
                </div>
              </div>

              {/* Snow Rule */}
              <div className={`p-3 rounded-xl border flex items-center gap-3 ${
                darkMode ? 'bg-[#0c141b] border-slate-800' : 'bg-[#f4fafb] border-[#abc9cb]/60'
              }`}>
                <div className="p-2 rounded-lg bg-teal-400/15 text-teal-400">
                  <CloudSnow className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">Snowfall Animation ❄️</h4>
                  <p className="text-[11px] text-slate-400">
                    If temperature is <strong className="text-[#f45b0b]">below 25°C</strong>, gentle snowfall falls across the site.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy notice badge */}
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                100% Client-side. No tracking. We only use OpenStreetMap reverse geocoding to detect your city name.
              </span>
            </div>
          </div>

          {/* Error Message if Geolocation fails */}
          {locationError && (
            <div className="mx-6 sm:mx-7 mt-3 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Location Access Note</p>
                <p className="mt-0.5 text-[11px] text-red-300">
                  {locationError}. You can search your city manually below using OpenStreetMap (OSM) or pick a preset.
                </p>
              </div>
            </div>
          )}

          {/* OpenStreetMap Manual City Search Section (Collapsible / Toggle) */}
          <div className="px-6 sm:px-7 mt-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-xs font-semibold text-[#f45b0b] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{showSearch ? 'Hide OpenStreetMap City Search' : 'Prefer not to share GPS? Search any city with OSM'}</span>
            </button>

            {showSearch && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2.5 space-y-2"
              >
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type city name (e.g. Indore, Delhi, Manali, London)..."
                    className={`w-full pl-9 pr-10 py-2 rounded-xl text-xs sm:text-sm border transition outline-none ${
                      darkMode 
                        ? 'bg-[#101920] border-slate-700 text-white focus:border-[#f45b0b]' 
                        : 'bg-white border-[#abc9cb] text-slate-800 focus:border-[#f45b0b]'
                    }`}
                  />
                  {isSearching && (
                    <Loader2 className="w-4 h-4 text-[#f45b0b] animate-spin absolute right-3 top-3" />
                  )}
                </div>

                {/* Search Results Dropdown */}
                {searchResults.length > 0 && (
                  <div className={`max-h-40 overflow-y-auto rounded-xl border p-1 shadow-lg ${
                    darkMode ? 'bg-[#101920] border-slate-800' : 'bg-white border-[#abc9cb]'
                  }`}>
                    {searchResults.map((item, idx) => (
                      <button
                        key={`${item.city}-${idx}`}
                        onClick={() => selectOSMCity(item)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition cursor-pointer ${
                          darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-[#edf5f6] text-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2 truncate">
                          <MapPin className="w-3.5 h-3.5 text-[#f45b0b] shrink-0" />
                          <span className="font-semibold">{item.city}</span>
                          <span className="text-slate-400 text-[11px] truncate">
                            {item.country ? `(${item.country})` : ''}
                          </span>
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* Quick Simulation Presets */}
          <div className="px-6 sm:px-7 mt-3.5">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Or Instant Experience Presets:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {presets.map((preset) => {
                if (preset.type === 'gps') return null
                return (
                  <button
                    key={preset.name}
                    onClick={() => {
                      selectPreset(preset)
                      closeLocationModal()
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition cursor-pointer flex items-center gap-1 ${
                      darkMode 
                        ? 'bg-[#0f171e] border-slate-800 text-slate-300 hover:border-[#f45b0b] hover:text-white' 
                        : 'bg-white border-[#abc9cb]/70 text-slate-700 hover:border-[#f45b0b] hover:text-[#081014]'
                    }`}
                  >
                    <span>{preset.forceCondition === 'snow' ? '❄️' : preset.forceCondition === 'rain' ? '🌧️' : '☀️'}</span>
                    <span>{preset.name.split(',')[0]}</span>
                    <span className="text-[10px] text-[#f45b0b] font-mono">({preset.temp}°C)</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="p-6 sm:p-7 pt-5 mt-4 border-t border-[rgba(171,201,203,0.2)] flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={closeLocationModal}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer text-center ${
                darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800/40' : 'text-slate-600 hover:text-black hover:bg-slate-100'
              }`}
            >
              Maybe Later (Keep Default)
            </button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isRequesting}
              onClick={requestLocationWithConsent}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-lg transition flex items-center justify-center gap-2 cursor-pointer ${
                isRequesting
                  ? 'bg-[#f45b0b]/60 cursor-not-allowed'
                  : 'bg-[#f45b0b] hover:bg-[#e04f05] shadow-[#f45b0b]/30'
              }`}
            >
              {isRequesting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Detecting Location via OSM...</span>
                </>
              ) : (
                <>
                  <MapPin className="w-4 h-4" />
                  <span>Accept & Enable Live Weather</span>
                </>
              )}
            </motion.button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LocationPermissionModal

