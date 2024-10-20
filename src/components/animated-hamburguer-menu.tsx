import { motion } from "framer-motion";

interface AnimatedHamburgerMenuProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const AnimatedHamburgerMenu: React.FC<AnimatedHamburgerMenuProps> = ({
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="cursor-pointer" onClick={toggleOpen}>
      <div className="relative w-8 h-8 flex flex-col justify-between items-center z-50">
        {/* Linha superior */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 10 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="w-8 h-1 bg-white rounded"
        />

        {/* Linha do meio */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="w-8 h-1 bg-white rounded"
        />

        {/* Linha inferior */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -10 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="w-8 h-1 bg-white rounded"
        />
      </div>
    </div>
  );
};

export default AnimatedHamburgerMenu;
