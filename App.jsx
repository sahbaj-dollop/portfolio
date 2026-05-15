import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Home from './Componants/Home'
import About from './Componants/About'
import Contact from './Componants/Contact'
import Project from './Componants/Project'
import Skills from './Componants/Skills'
import Navbar from './Componants/Navbar'
import Footer from './Componants/Footer'
import BackToTop from './Componants/BackToTop'
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
            style: { background: '#3b82f6', color: '#fff' },
          },
        }}
      />

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
