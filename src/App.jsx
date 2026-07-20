import Header from './components/Header'
import Hero from './components/Hero'
import VisionBanner from './components/VisionBanner'
import ServiceMatrix from './components/ServiceMatrix'
import Accreditations from './components/Accreditations'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <VisionBanner />
        <ServiceMatrix />
        <Accreditations />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  )
}
