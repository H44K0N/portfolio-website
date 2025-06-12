import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="w-full" // 👈 VIKTIG!
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
