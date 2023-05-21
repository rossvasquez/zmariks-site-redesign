import Header from './assets/components/landing/header.jsx'
import LandingCarousel from './assets/components/landing/carousel.jsx'
import OrderButtons from './assets/components/landing/orderButtons.jsx'
import DeliveryServices from './assets/components/landing/deliveryServices.jsx'
import AboutSection from './assets/components/landing/about.jsx'
import Footer from './assets/components/landing/footer.jsx'
import NewOrder from './assets/components/landing/newOrder.jsx'

function App() {

  return (
    <>
      <LandingCarousel />
      <NewOrder />
      <AboutSection />
      <Footer />
      <Header />
    </>
  )
}

export default App
