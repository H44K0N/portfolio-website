import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Education from './components/pages/Education';
import About from './components/pages/About';

function App() {
  const location = useLocation();

  return (
    <>
    <div><Header />
      <main className="p-8">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </main></div>
      
    </>
  );
}

export default App;
