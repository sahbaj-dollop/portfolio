import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CloudSnow, 
  CloudRain, 
  Sun, 
  Cloud, 
  Compass, 
  RefreshCw, 
  Sliders, 
  Sparkles, 
  Check, 
  X,
  MapPin,
  ChevronDown
} from 'lucide-react'
import { useWeather } from '../Context/WeatherContext'
import { useTheme } from '../Context/ThemeContext'

const WeatherWidget = () => {
  const { 
    weatherData, 
    effectMode, 
    setEffectMode, 
    intensity, 
    setIntensity, 
    activeEffect,
    activePreset,
    selectPreset,
    openLocationModal,
    requestLocationWithConsent,
    presets
  } = useWeather()
  const { darkMode } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const widgetRef = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Icon for current active condition
  const getConditionIcon = () => {
    if (activeEffect === 'snow') return <CloudSnow className="w-4 h-4 text-powder-blue animate-pulse" />
    if (activeEffect === 'rain') return <CloudRain className="w-4 h-4 text-powder-blue" />
    if (activeEffect === 'ambient') return <Sparkles className="w-4 h-4 text-[#f45b0b]" />
    if (weatherData.condition === 'snow') return <CloudSnow className="w-4 h-4 text-powder-blue" />
    if (weatherData.condition === 'rain') return <CloudRain className="w-4 h-4 text-powder-blue" />
    if (weatherData.condition === 'cloudy') return <Cloud className="w-4 h-4 text-slate-400" />
    return <Sun className="w-4 h-4 text-[#f45b0b]" />
  }

  return (
    <div className="relative" ref={widgetRef}>
      {/* Navbar Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Weather and atmospheric effects"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
          darkMode
            ? 'bg-[#0f171e] hover:bg-[#152028] border-[rgba(171,201,203,0.25)] text-white shadow-sm hover:border-[#abc9cb]'
            : 'bg-white hover:bg-[#edf5f6] border-[#abc9cb] text-[#081014] shadow-sm'
        }`}
      >
        <span className="flex items-center justify-center">
          {getConditionIcon()}
        </span>

        <span className="hidden sm:inline font-semibold">
          {weatherData.loading ? 'Detecting...' : `${weatherData.city || 'Weather'}`}
        </span>

        {weatherData.temp !== null && (
          <span className="font-mono text-[11px] px-1.5 py-0.5 rounded-md font-bold text-[#f45b0b] bg-[#f45b0b]/10 border border-[#f45b0b]/20">
            {weatherData.temp}°C
          </span>
        )}

        {/* Live indicator dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f45b0b] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f45b0b]"></span>
        </span>

        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {/* Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl border p-4 shadow-2xl z-50 backdrop-blur-xl ${
              darkMode 
                ? 'bg-[#0b1116]/95 border-[rgba(171,201,203,0.3)] text-white shadow-black/80' 
                : 'bg-white/95 border-[#abc9cb] text-[#081014] shadow-[rgba(171,201,203,0.3)]'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[rgba(171,201,203,0.2)]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#f45b0b]" />
                <span className="font-bold text-sm">
                  Weather & Atmosphere
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Live Weather Status Card */}
            <div className={`p-3 rounded-xl border mb-4 flex items-center justify-between ${
              darkMode 
                ? 'bg-[#101920] border-[rgba(171,201,203,0.2)]' 
                : 'bg-[#edf5f6] border-[#abc9cb]/60'
            }`}>
              <div>
                <p className="text-xs text-[#abc9cb] font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#f45b0b]" />
                  <span>{weatherData.city}, {weatherData.country}</span>
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold tracking-tight text-[#ffffff] dark:text-[#ffffff]">
                    {weatherData.temp !== null ? `${weatherData.temp}°C` : '--'}
                  </span>
                  <span className="text-xs font-semibold text-[#f45b0b]">
                    {weatherData.conditionLabel || weatherData.condition}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Powered by Open-Meteo & OpenStreetMap (OSM)
                </p>
              </div>

              <div className="flex items-center gap-1">
                <motion.button
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.4 }}
                  onClick={requestLocationWithConsent}
                  className="p-2 rounded-xl bg-[#f45b0b]/10 text-[#f45b0b] hover:bg-[#f45b0b] hover:text-white transition cursor-pointer"
                  title="Refresh GPS location via OSM"
                >
                  <RefreshCw className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Custom Location Modal Trigger */}
            <button
              onClick={() => {
                setIsOpen(false)
                openLocationModal()
              }}
              className={`w-full mb-3.5 py-2 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition cursor-pointer ${
                darkMode
                  ? 'bg-[#0f171e] hover:bg-[#152028] border-[rgba(171,201,203,0.3)] text-white hover:border-[#f45b0b]'
                  : 'bg-[#edf5f6] hover:bg-white border-[#abc9cb] text-slate-800 hover:border-[#f45b0b]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#f45b0b]" />
              <span>Change Location / OSM Permissions</span>
            </button>

            {/* Atmosphere / Snow Effect Modes */}
            <div className="mb-4">
              <label className="block text-[11px] font-semibold text-[#abc9cb] uppercase tracking-wider mb-2">
                Visual Effect Mode:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {[
                  { id: 'auto', label: 'Auto (Weather)', icon: Compass },
                  { id: 'snow', label: 'Snowfall ❄️', icon: CloudSnow },
                  { id: 'rain', label: 'Rainfall 🌧️', icon: CloudRain },
                  { id: 'ambient', label: 'Ambient ✨', icon: Sparkles },
                  { id: 'off', label: 'Effects Off', icon: X },
                ].map((mode) => {
                  const Icon = mode.icon
                  const isActive = effectMode === mode.id
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setEffectMode(mode.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#f45b0b] border-[#f45b0b] text-white shadow-md shadow-[#f45b0b]/30 font-bold'
                          : darkMode
                          ? 'bg-[#0f171e] border-slate-800 text-slate-300 hover:border-[#abc9cb] hover:text-white'
                          : 'bg-white border-[#abc9cb]/70 text-[#081014] hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="truncate">{mode.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* City Weather Simulator Presets */}
            <div className="mb-3">
              <label className="block text-[11px] font-semibold text-[#abc9cb] uppercase tracking-wider mb-2">
                Simulate Location:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {presets.map((preset) => {
                  const isSelected = activePreset === preset.name
                  return (
                    <button
                      key={preset.name}
                      onClick={() => selectPreset(preset)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#abc9cb] border-[#abc9cb] text-[#070a0e] font-bold'
                          : darkMode
                          ? 'bg-[#101920] border-slate-800 text-slate-300 hover:border-[#abc9cb]'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {preset.name}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Intensity Toggle */}
            <div className="pt-2 border-t border-[rgba(171,201,203,0.2)] flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Sliders className="w-3 h-3 text-[#f45b0b]" />
                <span>Snow / Particle Density:</span>
              </span>
              <div className="flex gap-1">
                {['light', 'normal', 'heavy'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setIntensity(lvl)}
                    className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider cursor-pointer transition ${
                      intensity === lvl
                        ? 'bg-[#f45b0b] text-white'
                        : 'bg-slate-800/40 text-slate-400 hover:text-white'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WeatherWidget

