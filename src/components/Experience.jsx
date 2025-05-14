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
            {language === 'ar' ? 'حلول نقل حصرية' : 'EXKLUSIVE TRANSPORTLÖSUNGEN'}
          </p>
          <h2 className="section-title">
            {language === 'ar' ? 'خدمة سائق فاخر' : 'Premium Chauffeur Service'}
          </h2>
          <div className="section-title-underline"></div>
        </motion.div>

        <p className="section-description">
          {language === 'ar'
            ? "نقدم خدمة سائق من الدرجة الأولى وحلول نقل حصرية للعملاء المميزين. تضمن خدمة سائق الأعمال وخدمة النقل التنفيذي وخدمة سائق كبار الشخصيات لدينا أعلى مستويات الراحة والخصوصية. مع سائقينا المحترفين وسياراتنا الفاخرة، ستستمتع برحلة أنيقة ومريحة - سواء لمواعيد العمل أو النقل من المطار أو المناسبات الخاصة."
            : "Wir bieten erstklassigen Chauffeurservice und exklusive Transportlösungen für anspruchsvolle Kunden. Unser Business Chauffeur Service, Executive Transfer Service und VIP Chauffeur Service garantieren höchsten Komfort und Diskretion. Mit unseren professionellen Fahrern und Luxusfahrzeugen erleben Sie eine stilvolle und komfortable Reise - ob für Geschäftstermine, Flughafentransfers oder besondere Anlässe."
          }
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

