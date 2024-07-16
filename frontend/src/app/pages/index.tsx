// src/app/pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import RandomImageGrid from '../components/RandomImageGrid';
import UploadButton from '../components/UploadButton';
import styles from '../../styles/HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContent}>
        <h1 className={styles.title}>FILMOGRAPHY</h1>
        <p className={styles.subtitle}>Standard Photos. Extraordinary Results.</p>
        <RandomImageGrid />
        <UploadButton />
      </div>
    </div>
  );
};

export default HomePage;
