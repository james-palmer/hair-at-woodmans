import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Faq from './components/Faq';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Faq />
        <FindUs />
      </main>
      <Footer />
    </div>
  );
}
