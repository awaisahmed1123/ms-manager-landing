// src/app/privacy-policy/page.js
import styles from '../legal.module.css'; // Common styles for legal pages

export const metadata = {
  title: 'Privacy Policy - MS Manager',
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.legalPage}>
      <div className="container">
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: November 10, 2025</p>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            MS Manager ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how our mobile application collects, uses, and safeguards your information when you use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Personal Information:</strong> When you register, we collect your Name, Shop Name, Phone Number, and Email Address for account management.</li>
            <li><strong>Business Data:</strong> We store data you enter about your stock (IMEI, models), sales, customers, and suppliers to provide the ERP service.</li>
            <li><strong>Device Permissions:</strong>
              <ul>
                <li><strong>Camera:</strong> Used only for scanning barcodes/QR codes of products.</li>
                <li><strong>Storage/Gallery:</strong> Used to upload product images or save PDF invoices.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Data</h2>
          <p>We use your data solely to:</p>
          <ul>
            <li>Provide core app functionality (Stock management, POS, Khata).</li>
            <li>Sync your data across devices using our secure cloud servers (Supabase).</li>
            <li>Provide customer support when you contact us.</li>
          </ul>
          <p><strong>We DO NOT sell your personal or business data to any third parties.</strong></p>
        </section>

        <section className={styles.section}>
          <h2>4. Data Security</h2>
          <p>
            Your data is stored securely on Supabase servers, which use industry-standard encryption. While we implement strong security measures, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul>
            <li>WhatsApp: +92 316 3931838</li>
          </ul>
        </section>
      </div>
    </main>
  );
}