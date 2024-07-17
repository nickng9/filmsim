// src/app/components/RandomImageGrid.tsx
"use client";

import React from 'react';
import styles from '../../styles/RandomImageGrid.module.css';

const images = [
  { src: '/images/photo1.jpg', className: styles.image1 },
  { src: '/images/photo2.jpg', className: styles.image2 },
  { src: '/images/photo3.jpg', className: styles.image3 },
  { src: '/images/photo4.jpg', className: styles.image4 },
  // Add paths to other images
];

const RandomImageGrid: React.FC = () => {
  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Image ${index}`}
          className={`${styles.image} ${image.className}`}
        />
      ))}
    </div>
  );
};

export default RandomImageGrid;
