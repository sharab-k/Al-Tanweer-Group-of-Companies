import Header from '../components/Header'
import Hero from '../components/Hero'
import VisionBanner from '../components/VisionBanner'
import ServiceMatrix from '../components/ServiceMatrix'
import Accreditations from '../components/Accreditations'
import QuoteForm from '../components/QuoteForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <VisionBanner />
      <ServiceMatrix />
      <Accreditations />
      <QuoteForm />
      <Footer />
    </main>
  )
}
