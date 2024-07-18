"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../../styles/UploadButton.module.css';

const UploadButton: React.FC = () => {
  return (
    <div className={styles.uploadContainer}>
      <img src="/images/RightFacingArrow.svg" alt="Left Arrow" className={styles.arrow} />
      <div className={styles.uploadButton}>
        <Link href="/upload" legacyBehavior>
          <a className={styles.button}>Upload a Photo to Get Started</a>
        </Link>
      </div>
      <img src="/images/LeftFacingArrow.svg" alt="Right Arrow" className={styles.arrow} />
    </div>
  );
};

export default UploadButton;
