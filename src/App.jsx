import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import ScrollToTop from "./ScrollToTop";



import About from './pages/About'
import Financing from './pages/Financing'
import International from './pages/International'
import Faq from './pages/Faq'
import Dealer from './pages/Dealer'
import Commission from './pages/Commission'
import WhatsAppFloat from './components/WhatsAppFloat'




function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <div className="flex flex-col min-h-screen">

        <Header />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/international" element={<International />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/dealer-management" element={<Dealer />} />
            <Route path="/commission" element={<Commission />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

      </div>
      <WhatsAppFloat />
    </BrowserRouter>
  )
}

export default App