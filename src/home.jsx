import Header from './assets/components/landing/header.jsx'
import LandingCarousel from './assets/components/landing/carousel.jsx'
import OrderButtons from './assets/components/landing/orderButtons.jsx'
import DeliveryServices from './assets/components/landing/deliveryServices.jsx'
import AboutSection from './assets/components/landing/about.jsx'
import Footer from './assets/components/landing/footer.jsx'

function App() {

  return (
    <>
      <LandingCarousel />
      <OrderButtons />
      <DeliveryServices />
      <AboutSection />
      <Footer />
      <Header />
    </>
  )
}

export default App
