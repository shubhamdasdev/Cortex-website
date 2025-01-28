import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Terms } from './components/Terms';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Hero from './components/Hero';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { ProductDetails } from './components/ProductDetails';
import { Action } from './components/Action';
import { Privacy } from './components/Privacy';
import { SplineInteractive } from './components/SplineInteractive';

const Home = () => (
  <div className="relative z-10">
    <Hero />
    <SplineInteractive />
    <Features />
    <ProductDetails />
    <Action />
    <ContactForm />
    <FAQ />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
