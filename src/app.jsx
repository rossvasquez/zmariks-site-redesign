import Layout from './pages/layout';
import Home from './pages';
import Rewards from './pages/rewards';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={ <Home/> } />
          <Route path="rewards" element={<Rewards />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
