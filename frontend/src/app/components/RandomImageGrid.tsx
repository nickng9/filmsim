"use client";

import React, { useEffect, useState } from 'react';
import styles from '../../styles/RandomImageGrid.module.css';

const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
];

const RandomImageGrid: React.FC = () => {
  const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);

  useEffect(() => {
    const generateRandomPositions = () => {
      const positions = [];
      const generatePosition = () => ({
        top: Math.random() * 75 + 10, // Between 10% and 85%
        left: Math.random() * 75 + 10, // Between 10% and 85%
      });

      for (let i = 0; i < images.length; i++) {
        let newPosition = generatePosition();
        let attempts = 0;

        // Ensure no overlap by checking distance
        while (
          positions.some(
            (pos) =>
              Math.abs(pos.top - newPosition.top) < 20 &&
              Math.abs(pos.left - newPosition.left) < 20
          ) && attempts < 100
        ) {
          newPosition = generatePosition();
          attempts++;
        }
        positions.push(newPosition);
      }
      setPositions(positions);
    };

    generateRandomPositions();
  }, []);

  return (
    <div className={styles.grid}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index}`}
          style={{ top: `${positions[index]?.top}%`, left: `${positions[index]?.left}%` }}
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default RandomImageGrid;
