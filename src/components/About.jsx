import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

// Import custom styles for carpool section
import '../styles/carpool-custom.css';

const ServiceCard = ({ index, title, icon, id }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.5)}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="w-full mx-auto"
    >
      <div className="card">
        <Link to={`/carpool/${id}`} className="card-link">
          <div className="card-image">
            <motion.img
              src={icon}
              alt={t(`carpool.${id}`)}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              loading="eager"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">{t(`carpool.${id}`)}</h3>
            <p className="card-description text-center">
              Click to view details
            </p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

const CarpoolContent = () => {
  const { t } = useTranslation();

  return (
    <div className="section-container">
      <div className="section-header">
        <motion.div variants={textVariant()}>
          <p className="section-subtitle">PREMIUM VEHICLES</p>
          <h2 className="section-title">Carpool</h2>
          <div className="section-title-underline"></div>
        </motion.div>

        <p className="section-description">
          Our premium carpool service offers comfortable and reliable transportation options for all occasions.
          Choose from our luxury fleet of high-end vehicles driven by professional chauffeurs.
        </p>
      </div>

      <div className="card-grid">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const Carpool = () => {
  return (
    <div className="relative z-0">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <CarpoolContent />
      </div>
    </div>
  );
};

const WrappedCarpool = SectionWrapper(CarpoolContent, 'carpool');

// Export both the wrapped version (for the home page) and the standalone version (for the route)
export { Carpool };
export default WrappedCarpool;
