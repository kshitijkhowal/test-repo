import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <div data-theme="dark">
      <div className="min-h-screen flex flex-col ">
        <Navbar />
        <main className="flex flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/find-route" element={<FindRoute />} />
            <Route path="/network-map" element={<NetworkMap />} /> */}
            <Route path="/about" element={<About />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
    </div>
  )
}

export default App
