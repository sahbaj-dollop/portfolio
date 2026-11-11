import { useState, useEffect } from 'react'
import Snowfall from 'react-snowfall'
import { Toaster } from 'react-hot-toast'
import { useTheme } from './Context/ThemeContext'
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
// import FallingLeaves from 'react-snowfall'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { darkMode } = useTheme()

  useEffect(() => {
    // Quick splash transition then reveal site
    const timer = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Snowfall Effect Across All Portfolio Sections */}
      {/* <FallingLeaves 
       fullScreen={true}
       shapes={["birch","maple","oak"]}
      /> */}


       <Snowfall
        color={darkMode ? 'rgba(255, 255, 255, 0.85)' : '#2563eb'}
        snowflakeCount={150}
        speed={[3, 5]}
        wind={[-0.4, 1.2]}
        radius={[0.8, 2.8]}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: 0,
          left: 0,
          zIndex: 35,
          pointerEvents: 'none',
        }}
      /> 

      {/* Page Loader */}
      <Loader isLoading={isLoading} />

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
            background: '#0f172a',
            color: '#f8fafc',
            border: '1px solid #334155',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
          },
          success: {
            iconTheme: { primary: '#10b981', secondary: '#0f172a' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#0f172a' },
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

export default App
