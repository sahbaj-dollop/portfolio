import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Home from './Componants/Home'
import Stats from './Componants/Stats'
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

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loader for 2 seconds then reveal site
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Page Loader */}
      <Loader isLoading={isLoading} />

      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '10px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '500',
            fontSize: '14px',
          },
          success: {
            style: { background: '#f0e6dd', color: '#191970' },
            iconTheme: { primary: '#191970', secondary: '#f0e6dd' },
          },
          error: {
            style: { background: '#f0e6dd', color: '#191970' },
            iconTheme: { primary: '#191970', secondary: '#f0e6dd' },
          },
          loading: {
            style: { background: '#191970', color: '#191970' },
          },
        }}
      />

      <Navbar />
      <Home />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  )
}

export default App
