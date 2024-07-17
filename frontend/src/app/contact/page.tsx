// src/app/contact/page.tsx
import React from 'react';
import ContactForm from './ContactForm';
import styles from '../../styles/ContactForm.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FEEDBACK FORM</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
