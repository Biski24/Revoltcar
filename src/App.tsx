import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Home from '@/pages/Home';
import Vehicules from '@/pages/Vehicules';
import Partenaires from '@/pages/Partenaires';
import Faq from '@/pages/Faq';
import Contact from '@/pages/Contact';
import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 }
};

const App = () => {
  return (
    <div className="min-h-screen bg-white text-text">
      <Navbar />
      <main className="mx-auto max-w-7xl pb-20">
        <Routes>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition} transition={{ duration: 0.3 }}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/vehicules"
            element={
              <motion.div {...pageTransition} transition={{ duration: 0.3 }}>
                <Vehicules />
              </motion.div>
            }
          />
          <Route
            path="/partenaires"
            element={
              <motion.div {...pageTransition} transition={{ duration: 0.3 }}>
                <Partenaires />
              </motion.div>
            }
          />
          <Route
            path="/faq"
            element={
              <motion.div {...pageTransition} transition={{ duration: 0.3 }}>
                <Faq />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div {...pageTransition} transition={{ duration: 0.3 }}>
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
