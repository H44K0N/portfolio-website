import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // install lucide-react for icons

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'About', path: '/about' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4">
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-4 px-6 py-3 rounded-2xl bg-transparent backdrop-blur-sm justify-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <motion.div
              key={item.name}
              className="relative px-4 py-2"
              initial={false}
              animate={{ scale: isActive ? 1.02 : 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-highlight"
                  className="absolute inset-0 rounded-full bg-surface shadow-inner border border-white/5"
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
              <NavLink to={item.path} className="relative text-white">
                {item.name}
              </NavLink>
            </motion.div>
          );
        })}
      </nav>

      {/* Mobile menu button */}
      <div className="flex md:hidden justify-between items-center py-2">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-2 mt-2 p-4 rounded-xl bg-surface shadow-md md:hidden"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`px-4 py-2 rounded-md text-white ${
                    isActive ? 'bg-white/10 font-semibold' : 'hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
