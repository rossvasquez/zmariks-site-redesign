import Header from './assets/components/landing/header.jsx'
import LandingCarousel from './assets/components/landing/carousel.jsx'
import OrderButtons from './assets/components/landing/orderButtons.jsx'
import DeliveryServices from './assets/components/landing/deliveryServices.jsx'

function App() {

  return (
    <>
      <LandingCarousel />
      <OrderButtons />
      <DeliveryServices />
      <Header />
    </>
  )
}

export default App
