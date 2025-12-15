import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import VanillaProcess from './pages/VanillaProcess'
import Contact from './pages/Contact'

function App() {

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/vanilla-process' element={<VanillaProcess />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
