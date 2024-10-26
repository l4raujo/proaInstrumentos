import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './assets/components/Header'
import Home from './assets/pages/Home'
import QuemSomos from './assets/pages/QuemSomos'
import Endereco from './assets/pages/Endereco'
import Contato from './assets/pages/Contato'
import Instrumentos from './assets/pages/Instrumentos'
import Footer from './assets/components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/QuemSomos' element={<QuemSomos />} />
          <Route path='/Instrumentos' element={<Instrumentos />} />
          <Route path='/Endereço' element={<Endereco />} />
          <Route path='/Contato' element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
