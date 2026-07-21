import Header from '../components/Header'
import Hero from '../components/Hero'
import VisionBanner from '../components/VisionBanner'
import CompanyMatrix from '../components/CompanyMatrix'
import Accreditations from '../components/Accreditations'
import QuoteForm from '../components/QuoteForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <VisionBanner />
      <CompanyMatrix />
      <Accreditations />
      <QuoteForm />
      <Footer />
    </main>
  )
}
