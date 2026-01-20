import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Insights from './components/Insights'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <Preloader onComplete={() => setIsLoaded(true)} />
      {isLoaded && (
        <div>
          <div className="fixed-background" />
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Insights />
          <FAQ />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
