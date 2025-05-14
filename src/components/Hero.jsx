import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import Slideshow from "./Slideshow";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Get the text phrases from translations
  const textPhrases = t('hero.typewriter', { returnObjects: true });

  // Effect to cycle through text phrases
  useEffect(() => {
    if (!textPhrases || textPhrases.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textPhrases.length);
        setIsAnimating(true);
      }, 500); // Wait for exit animation to complete
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, [textPhrases]);
  return (
    <section className="relative w-full h-screen mx-auto hero-section overflow-hidden">
      {/* Slideshow background for hero section */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Slideshow />
      </div>

      {/* Gradient overlay at the bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Hero content */}
      <div className={`relative pt-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 gold-gradient" />
        </div>

        <div>
          <h1 className={`font-black lg:text-[65px] sm:text-[50px] xs:text-[40px] text-[35px] lg:leading-[80px] mt-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] tracking-wider uppercase`}>
            {language === 'ar' ? (
              // Arabic title with the same color scheme
              <span>
                <span className="text-white">سائق</span> <span className="text-[#D4AF37]">فاخر</span>
              </span>
            ) : (
              // English title
              <span>
                <span className="text-white">PREMIUM</span> <span className="text-[#D4AF37]">CHAUFFEUR</span>
              </span>
            )}
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] flex`}>
            <span className={language === 'ar' ? 'ml-2' : 'mr-2'}>{t('hero.subtitle')}</span>
            <div className="text-animation-container">
              <AnimatePresence mode="wait">
                {isAnimating && textPhrases && textPhrases.length > 0 && (
                  <motion.span
                    key={currentTextIndex}
                    className="text-[#D4AF37] font-semibold modern-text-animation"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                      }
                    }}
                    exit={{
                      y: -20,
                      opacity: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {textPhrases[currentTextIndex]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Removed "Our Vehicles" button as requested */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
