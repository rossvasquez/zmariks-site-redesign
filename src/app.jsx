import Layout from './pages/layout';
import Home from './pages';
import Locations from './pages/locations';
import Rewards from './pages/rewards';
import Franchise from './pages/franchise';
import Contact from './pages/contact';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="locations" element={<Locations />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="franchise" element={<Franchise />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
