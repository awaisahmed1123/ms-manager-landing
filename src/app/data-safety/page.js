// src/app/data-safety/page.js
import styles from '../legal.module.css';

export const metadata = {
  title: 'Data Safety - MS Manager',
};

export default function DataSafety() {
  return (
    <main className={styles.legalPage}>
      <div className="container">
        <h1 className={styles.title}>Data Safety</h1>
        <p className={styles.subtitle}>Understanding how your data is handled.</p>

        <section className={styles.section}>
          <h2>What data is shared?</h2>
          <p><strong>No user data is shared</strong> with third-party companies or organizations. Your business data stays yours.</p>
        </section>

        <section className={styles.section}>
          <h2>What data is collected?</h2>
          <div className={styles.tableWrapper}>
             <table className={styles.table}>
               <thead>
                 <tr>
                   <th>Data Type</th>
                   <th>Purpose</th>
                   <th>Optional/Required</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>Name, Email, Phone</td>
                   <td>Account Management</td>
                   <td>Required</td>
                 </tr>
                 <tr>
                   <td>Photos/Videos</td>
                   <td>Product Images (App functionality)</td>
                   <td>Optional</td>
                 </tr>
                 <tr>
                   <td>Contacts/Customers</td>
                   <td>Digital Khata functionality</td>
                   <td>Optional</td>
                 </tr>
               </tbody>
             </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Security Practices</h2>
          <ul>
            <li><strong>Encryption:</strong> Data is encrypted in transit (when sending to our servers).</li>
            <li><strong>Authentication:</strong> Secure login is required to access data.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}