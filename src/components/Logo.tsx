import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Logo() {
  const svgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.6 } },
  };

  return (
    <motion.div className="loader" initial="hidden" animate="visible" exit="exit">
      <motion.svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" variants={svgVariants} custom={0}>
        <title>S B Loader</title>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8892AF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#CCD6F6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <g>
          {/* Letter S */}
          <motion.rect x="10" y="15" width="50" height="20" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />
          <motion.rect x="10" y="15" width="20" height="40" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />
          <motion.rect x="10" y="45" width="50" height="20" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />
          <motion.rect x="40" y="45" width="20" height="40" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />
          <motion.rect x="10" y="75" width="50" height="20" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />

          {/* Space between S and B */}

          {/* Letter B */}
          <motion.rect x="80" y="15" width="20" height="80" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />
          <motion.rect x="100" y="15" width="40" height="20" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />
          <motion.rect x="100" y="45" width="40" height="20" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />
          <motion.rect x="100" y="75" width="40" height="20" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />
          <motion.rect x="130" y="15" width="10" height="30" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />
          <motion.rect x="130" y="65" width="10" height="30" fill="url(#grad1)" stroke="#8892AF" strokeWidth="2" />

          {/* Additional Animated Shapes */}
          <motion.circle
            cx="35"
            cy="25"
            r="7"
            fill="#CCD6F6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          />
          <motion.circle
            cx="110"
            cy="75"
            r="7"
            fill="#CCD6F6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2, delay: 0.5 }}
          />

          {/* Glowing Effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Enlarged Animated Circle */}
          <motion.circle
            cx="75"
            cy="50"
            r="55" // Increased from 40 to 55
            fill="none"
            stroke="#CCD6F6"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          >
            <animate attributeName="r" values="55;60;55" dur="2s" repeatCount="indefinite" />
          </motion.circle>
        </g>
      </motion.svg>
    </motion.div>
  );
}

Logo.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default Logo;
