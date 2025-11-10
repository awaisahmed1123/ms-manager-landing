'use client';
import { motion } from 'framer-motion';
import {
  FaMobileAlt, FaFileInvoiceDollar, FaBook,
  FaChartLine, FaWallet, FaShieldAlt
} from 'react-icons/fa'; // FaWifi hata kar FaWallet add kiya (expense ke liye)
import styles from './Features.module.css';

const featuresData = [
  {
    icon: <FaMobileAlt />,
    title: "Mukammal Stock Ka Hisab",
    description: "Har mobile ka IMEI, khareed rate, aur supplier ka record rakhen. Barcode se foran scan karen."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Digital POS Aur Pakka Bill",
    description: "Gahak ko apni dukan ke naam wala professional computer bill den. 1-click sale system."
  },
  {
    icon: <FaBook />,
    title: "Smart Digital Khata",
    description: "Udhaar ka jhanjhat khatam. Customer aur Supplier ka khata app khud manage karegi."
  },
  {
    icon: <FaChartLine />,
    title: "Munafa Aur Nuqsan Reports",
    description: "Rozana kitna kamaya? Ek click par janen ke aaj dukan ne kitna profit diya."
  },
  {
    icon: <FaWallet />, // New Icon for Expenses
    title: "Rozana Ke Kharche",
    description: "Chai pani, bill, aur kiraya—sab kharche app mein likhen taake asal bachat ka pata chale."
  },
  {
    icon: <FaShieldAlt />,
    title: "Data 100% Mehfooz",
    description: "Apka sara hisab kitab cloud par save hai. Mobile gum bh hojaye, data kahin nahi jayega."
  }
];

const Features = () => {
  return (
    <section className={styles.features} id="features">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>VVIP FEATURES</span>
          <h2 className={styles.title}>
            Har Wo Cheez Jo Apki <br />
            <span className={styles.titleHighlight}>Mobile Shop</span> Ko Chahiye
          </h2>
          <p className={styles.subtitle}>
            Puranay register choren aur MS Manager ke advanced features se apne karobar ko digital banayen.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
              whileHover={{ y: -10 }} // Hover animation
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;