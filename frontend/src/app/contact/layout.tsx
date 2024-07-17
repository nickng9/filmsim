// src/app/contact/layout.tsx
import React from 'react';
import styles from '../../styles/ContactForm.module.css';


export default function ContactLayout({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
