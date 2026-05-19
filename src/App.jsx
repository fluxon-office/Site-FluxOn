import { useState, useCallback, useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FitSection from './components/FitSection';
import Impact from './components/Impact';
import Problema from './components/Problema';
import Solucao from './components/Solucao';
import Entregas from './components/Entregas';
import Plataforma from './components/Plataforma';
import ComoFunciona from './components/ComoFunciona';
import Depoimentos from './components/Depoimentos';
import Sobre from './components/Sobre';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [thankyou, setThankyou] = useState(false);
  const [tyName, setTyName] = useState('');

  // Observe scroll reveal elements whenever the DOM changes
  useScrollReveal();

  // Re-observe after initial render (reveal elements load)
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
        if (!el.classList.contains('visible')) {
          el.classList.add('visible');
        }
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = useCallback((payload) => {
    setTyName(payload.nome.split(' ')[0]);
    setThankyou(true);
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  }, []);

  const closeThankyou = useCallback(() => {
    setThankyou(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      <CustomCursor />

      <main>
        <Navbar />
        <Hero />
        <FitSection />
        <Problema />
        <Impact />
        <ComoFunciona />
        <Solucao />
        <Entregas />
        <Plataforma />
        <Depoimentos />
        <Sobre />
        <CTASection onFormSubmit={handleFormSubmit} />
        <Footer />
      </main>

      <ThankYouPage visible={thankyou} name={tyName} onClose={closeThankyou} />
    </>
  );
}

export default App;
