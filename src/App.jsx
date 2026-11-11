import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useTheme } from './Context/ThemeContext'
import { WeatherProvider } from './Context/WeatherContext'
import WeatherCanvas from './Componants/WeatherCanvas'
import LocationPermissionModal from './Componants/LocationPermissionModal'
import Home from './Componants/Home'
import Stats from './Componants/Stats'
import TechMarquee from './Componants/TechMarquee'
import About from './Componants/About'
import Contact from './Componants/Contact'
import Project from './Componants/Project'
import Skills from './Componants/Skills'
import Experience from './Componants/Experience'
import Certifications from './Componants/Certifications'
import Navbar from './Componants/Navbar'
import Footer from './Componants/Footer'
import BackToTop from './Componants/BackToTop'
import FloatingWhatsApp from './Componants/FloatingWhatsApp'
import Loader from './Componants/Loader'
import TerminalDrawer from './Componants/TerminalDrawer'

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { darkMode } = useTheme()

  useEffect(() => {
    // Quick splash transition then reveal site
    const timer = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Dynamic Weather Effect (Snow / Rain / Ambient based on Location & Weather API) */}
      <WeatherCanvas />

      {/* Page Loader */}
      <Loader isLoading={isLoading} />

      {/* Location Permission & Custom Weather Experience Modal */}
      <LocationPermissionModal />

      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '14px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            fontSize: '13px',
            background: darkMode ? '#0e151b' : '#ffffff',
            color: darkMode ? '#ffffff' : '#081014',
            border: darkMode ? '1px solid rgba(171, 201, 203, 0.3)' : '1px solid #abc9cb',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
          },
          success: {
            iconTheme: { primary: '#f45b0b', secondary: '#ffffff' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#ffffff' },
          },
        }}
      />

      <Navbar />
      <Home />
      <Stats />
      <TechMarquee />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
      <TerminalDrawer />
    </>
  )
}

const App = () => {
  return (
    <WeatherProvider>
      <AppContent />
    </WeatherProvider>
  )
}

export default App
