// src/app/contact/layout.tsx
import React from 'react';
import styles from '../../styles/ContactForm.module.css';


export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
