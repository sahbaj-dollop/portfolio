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
            style: { background: '#22c55e', color: '#fff' },
            iconTheme: { primary: '#fff', secondary: '#22c55e' },
          },
          error: {
            style: { background: '#ef4444', color: '#fff' },
            iconTheme: { primary: '#fff', secondary: '#ef4444' },
          },
          loading: {
            style: { background: '#f97316', color: '#fff' },
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
