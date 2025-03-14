import './App.css';
import Header from './components/Header';
import Hero from './Hero/Hero';
import AddCars from './components/AddCars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cars from './Cars/Cars';
import CarById from './Cars/CarById';
import AboutUs from './components/AboutUs';
import ContactUS from './components/ContactUS';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<AddCars />} />
          <Route path='/' element={<>
            <Header />
            <Hero />
          </>} />\
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUS />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='cars/:id' element={<CarById />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
