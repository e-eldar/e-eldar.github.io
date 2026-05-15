import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import CursorGlow from './components/reactbits/CursorGlow.jsx';
import ReactBitsBackdrop from './components/reactbits/ReactBitsBackdrop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

export default function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-white">
      <ReactBitsBackdrop />
      <CursorGlow />
      {!isAdminPage && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </AnimatePresence>
      {!isAdminPage && <Footer />}
    </div>
  );
}
