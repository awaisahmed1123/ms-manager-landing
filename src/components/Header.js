'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navContainer}>
        {/* Logo Area - Updated Text */}
        <Link href="/" className={styles.logo}>
          <HiOutlineDevicePhoneMobile size={28} color="var(--color-primary)" />
          Mobile Shop<span> ERP</span>
        </Link>

        {/* Download Button Area */}
        <div className={styles.navLinks}>
          <Link href="#" className={styles.downloadBtn}>
            Download App
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;