'use client';
import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';
import { FaBoxOpen, FaShoppingCart, FaChartPie } from 'react-icons/fa';

const steps = [
  {
    icon: <FaBoxOpen />,
    number: "01",
    title: "Stock Add Karen",
    description: "Apni dukan ka sara stock barcode scan karke ya manually app mein enter karen. Sirf chand minutes lagenge."
  },
  {
    icon: <FaShoppingCart />,
    number: "02",
    title: "Sale Shuru Karen",
    description: "Gahak aya? 'Sell' button dabayen, mobile select karen aur foran pakka bill nikal kar den."
  },
  {
    icon: <FaChartPie />,
    number: "03",
    title: "Munafa Dekhen",
    description: "Din ke akhir mein bas app kholen aur dekhen ke aj kitni sale hui aur kitna munafa kamaya."
  }
];

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>SIMPLE PROCESS</span>
          <h2 className={styles.title}>
            App Use Karna Kitna <br />
            <span className={styles.titleHighlight}>Asaan Hai?</span>
          </h2>
        </motion.div>

        <div className={styles.stepsWrapper}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.iconBox}>
                <span className={styles.stepNumber}>{step.number}</span>
                {step.icon}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>

              {/* Connector Line (except for last item) */}
              {index !== steps.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;