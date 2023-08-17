import { FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './SplashScreen.css';

const degreeToRad = (degree) => {
  return degree * Math.PI / 180;
}

const distortStyleText = (angle = 0, distance = 1.5) => {
  const xDisplacement = Math.cos(angle) * distance;
  const yDisplacement = Math.sin(angle) * distance;
  
  return `${xDisplacement}px ${yDisplacement}px #FE2C55, ${-xDisplacement}px ${-yDisplacement}px #25F4EE`;
};

const distortStyleSvg = (angle = 0, distance = 2.5) => {
  const xDisplacement = Math.cos(angle) * distance;
  const yDisplacement = Math.sin(angle) * distance;
  
  return `drop-shadow(${xDisplacement}px ${yDisplacement}px 0px #FE2C55)
    drop-shadow(${-xDisplacement}px ${-yDisplacement}px 0px #25F4EE)`;
};

export const SplashScreen = () => {
  return (
    <motion.div
      className="splash-container"
      animate={{ opacity: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="splash-content">
        <div className="splash-logo">
          <FaTiktok size="5.5rem" style={{ filter: distortStyleSvg(degreeToRad(60))}} />
        </div>
        <div className="title">BobinoT<p style={{ display: 'inline', textShadow: distortStyleText() }}>o</p>k</div>
      </div>
    </motion.div>
  );
};