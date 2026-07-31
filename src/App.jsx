import Navbar from './components/Navbar'
import ShlokBanner from './components/ShlokBanner'
import Hero from './components/Hero'
import About from './components/About'
import PrincipalsNote from './components/PrincipalsNote'
import Academics from './components/Academics'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import AdmissionForm from './components/AdmissionForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <ShlokBanner />
      <Hero />
      <About />
      <PrincipalsNote />
      <Academics />
      <Gallery />
      <Testimonials />
      <AdmissionForm />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
