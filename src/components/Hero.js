'use client';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 30 },
    visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const backPhoneVariants1 = {
    hidden: { opacity: 0, scale: 0.7, x: -50, y: -50, rotateY: 40 },
    visible: { opacity: 0.8, scale: 0.85, x: 0, y: 0, rotateY: 10, transition: { duration: 1, ease: 'easeOut', delay: 0.3 } },
  };

  const backPhoneVariants2 = {
    hidden: { opacity: 0, scale: 0.7, x: 50, y: 50, rotateY: -40 },
    visible: { opacity: 0.6, scale: 0.8, x: 0, y: 0, rotateY: -10, transition: { duration: 1, ease: 'easeOut', delay: 0.5 } },
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.wrapper}`}>
        {/* Left Content */}
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.badge} variants={itemVariants}>
             🚀 Pakistan's #1 Mobile Shop ERP
          </motion.span>

          <motion.h1 className={styles.title} variants={itemVariants}>
            Apni Mobile Shop Ko <br />
            <span className={styles.titleHighlight}>Digital Banayen</span>
          </motion.h1>

          <motion.p className={styles.description} variants={itemVariants}>
            Ab <strong>Khata Registers</strong> ko bhool jayen. MS Manager ke sath Stock, Sale, aur Munafa—sab control karen ek ungli par.
            <br />
            Apki dukan ka mukammal digital system.
          </motion.p>

          <motion.div className={styles.buttonGroup} variants={itemVariants}>
            <a href="#" className={styles.googlePlayBtn}>
              <FaGooglePlay size={28} />
              <div className={styles.googlePlayText}>
                <small>GET IT ON</small>
                <span>Google Play</span>
              </div>
            </a>
            <a href="#features" className={styles.secondaryBtn}>
              See Features <FaArrowRight />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image (Mockups with Real Images) */}
        <motion.div
          className={styles.imageWrapper}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Back Mockup 1 (Left - Sell Screen) */}
          <motion.div className={styles.backMockup} variants={backPhoneVariants1}>
            <div className={styles.backScreen}>
              <Image
                src="/sell.jpeg"
                alt="Sell Screen"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </motion.div>

          {/* Back Mockup 2 (Right - Expense Screen) */}
          <motion.div className={styles.backMockup} variants={backPhoneVariants2}>
            <div className={styles.backScreen}>
              <Image
                src="/expense.jpeg"
                alt="Expense Screen"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </motion.div>

          {/* Main Front Mockup (Dashboard) */}
          <motion.div className={styles.phoneMockup} variants={phoneVariants}>
            <div className={styles.phoneScreen}>
              <Image
                src="/dashboard.jpeg"
                alt="Main Dashboard"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority // Main image ko jaldi load karne ke liye
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;