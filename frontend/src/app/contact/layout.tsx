// src/app/contact/layout.tsx
import React from 'react';
import Navbar from '../components/Navbar';

import styles from '../../styles/ContactForm.module.css';

export default function ContactLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <div className={styles.container}>
          {children}
        </div>
      </body>
    </html>
  );
}
