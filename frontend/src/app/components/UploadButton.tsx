// src/app/components/UploadButton.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../../styles/UploadButton.module.css';

const UploadButton: React.FC = () => {
  return (
    <div className={styles.uploadButton}>
      <Link href="/upload" legacyBehavior>
        <a className={styles.button}>Upload a Photo to Get Started</a>
      </Link>
    </div>
  );
};

export default UploadButton;
