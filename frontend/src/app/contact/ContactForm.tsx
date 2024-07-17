// src/app/contact/ContactForm.tsx
import React from 'react';
import styles from '../../styles/ContactForm.module.css';

const ContactForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" placeholder="First name" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Last name" />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="you@company.com" />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Leave us a message here..."></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>Send message</button>
    </form>
  );
};

export default ContactForm;