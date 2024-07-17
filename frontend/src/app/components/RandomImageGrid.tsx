// src/app/components/RandomImageGrid.tsx
"use client";

import React from 'react';
import styles from '../../styles/RandomImageGrid.module.css';

const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  // Add paths to other images
];

const RandomImageGrid: React.FC = () => {
  return (
    <div className={styles.grid}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index}`}
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default RandomImageGrid;
