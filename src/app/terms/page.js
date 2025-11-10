// src/app/terms/page.js
import styles from '../legal.module.css';

export const metadata = {
  title: 'Terms of Service - MS Manager',
};

export default function TermsOfService() {
  return (
    <main className={styles.legalPage}>
      <div className="container">
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: November 10, 2025</p>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>By downloading or using the MS Manager app, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Use of the App</h2>
          <p>MS Manager is provided for lawful business use only. You agree not to use the app for any illegal activities or to store illegal data.</p>
        </section>

        <section className={styles.section}>
          <h2>3. Account Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials. Any activity that occurs under your account is your responsibility.</p>
        </section>

        <section className={styles.section}>
          <h2>4. Limitation of Liability</h2>
          <p>MS Manager is provided "as is". We are not liable for any indirect, incidental, or consequential damages (including loss of data or profits) arising from your use of the app.</p>
        </section>
      </div>
    </main>
  );
}