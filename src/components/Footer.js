'use client';
import Link from 'next/link';
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.topSection}>
          {/* Column 1: Logo & About */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <HiOutlineDevicePhoneMobile size={26} color="var(--color-primary)" />
              MS<span>Manager</span>
            </Link>
            <p className={styles.brandDesc}>
              Pakistan ka No.1 Mobile Shop ERP system. Apne karobar ko digital banayen aur munafa barhayen.
            </p>
            {/* Social Links */}
            <div className={styles.socialLinks}>
              {/* WhatsApp par direct message ka link */}
              <a
                href="https://wa.me/923163931838"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul>
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#how-it-works">Kaam Kese Karta Hai</Link></li>
              <li><Link href="#">Download App</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal (Important for Play Store) */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul>
              {/* Yeh teeno pages ab hum banayenge */}
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/data-safety">Data Safety</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Rabta Karen</h4>
            <ul>
              {/* Number update kar diya */}
              <li>
                <a href="tel:+923163931838" style={{ direction: 'ltr', display: 'inline-block' }}>
                  +92 316 3931838
                </a>
              </li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className={styles.bottomSection}>
          <p>© {currentYear} MS Manager. All rights reserved.</p>
          <p>Made with ❤️ in Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;