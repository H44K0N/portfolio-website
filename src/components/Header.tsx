import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'About', path: '/about' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center">
      <nav className="flex gap-6 px-6 py-3 rounded-2xl bg-transparent backdrop-blur-sm relative">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <motion.div
              key={item.name}
              className="relative"
              initial={false}
              animate={{ scale: isActive ? 1.015 : 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }} // Material-ish ease
            >
              {isActive && (
                <motion.div
                  layoutId="nav-highlight"
                  className="absolute -inset-x-1 -inset-y-1 rounded-lg bg-surface shadow-inner border border-white/5"
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
              <NavLink
                to={item.path}
                className="relative px-4 py-2 rounded-md text-white"
              >
                {item.name}
              </NavLink>
            </motion.div>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
