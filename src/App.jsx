import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Slider from './components/Slider';
import DryAged from './components/DryAged';
import Content2 from './components/Content2';
import DasHandwerk from './components/DasHandwerk';
import Divider from './components/Divider';
import ImageLine from './components/ImageLine';
import Pepper from './components/Pepper';
import Content3 from './components/Content3';
import Genussnetz from './components/Genussnetz';
import Awards from './components/Awards';
import Empfehlungs from './components/Empfehlungs';
import TestimonialSlider from './components/TestimonialSlider';
import Footer from './components/Footer';
import Popup from './components/Popup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Slider />
      <main>
        <DryAged />
        <Content2 />
        <DasHandwerk />
        <Divider />
        <ImageLine />
        <Pepper />
        <Content3 />
        <Genussnetz />
        <Divider />
        <Awards />
        <Divider />
        <Empfehlungs />
        <TestimonialSlider />
      </main>
      <Footer />
      <Popup />
    </>
  );
}

export default App;
