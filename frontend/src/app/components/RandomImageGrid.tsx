// src/app/components/RandomImageGrid.tsx
import React, { useEffect, useState } from 'react';
import styles from '../../styles/RandomImageGrid.module.css';

const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  // Add paths to other images
];

const getRandomPosition = () => {
  const top = Math.random() * 60 + 20; // Between 20% and 80%
  const left = Math.random() * 60 + 20; // Between 20% and 80%
  return { top: `${top}%`, left: `${left}%` };
};

const RandomImageGrid: React.FC = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const newPositions = images.map(() => getRandomPosition());
    setPositions(newPositions);
  }, []);

  return (
    <div className={styles.grid}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Random Image ${index}`}
          className={styles.image}
          style={{ ...positions[index] }}
        />
      ))}
    </div>
  );
};

export default RandomImageGrid;
