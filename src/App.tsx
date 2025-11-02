import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Donate } from './pages/Donate';
import { HowToSend } from './pages/HowToSend';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

/**
 * Main App component with routing
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/how-to-send" element={<HowToSend />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
