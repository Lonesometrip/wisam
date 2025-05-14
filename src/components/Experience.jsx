import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

import "../styles/services-showcase.css";
import "../styles/elegant-timeline.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import ServicesShowcase from "./ServicesShowcase";
import ElegantTimeline from "./ElegantTimeline";



const ServicesContent = () => {
  const { t } = useTranslation();
  const { dir, language } = useLanguage();

  return (
    <div className="section-container">
      <div className="section-header">
        <motion.div variants={textVariant()}>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
          <h2 className="section-title">{t('services.title')}</h2>
          <div className="section-title-underline"></div>
        </motion.div>

        <p className="section-description">
          We offer a range of premium chauffeur services tailored to meet your transportation needs.
          Our professional drivers and luxury vehicles ensure a comfortable and stylish journey.
        </p>
      </div>

      <div className="timeline-container">
        <ElegantTimeline />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="relative z-0">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <ServicesContent />
      </div>

    </div>
  );
};

const WrappedServices = SectionWrapper(ServicesContent, "services");

// Export both the wrapped version (for the home page) and the standalone version (for the route)
export { Services };
export default WrappedServices;

