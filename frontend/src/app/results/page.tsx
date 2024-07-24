'use client';

import React, { useState } from 'react';
import styles from '../../styles/Results.module.css';
import PhotoSelector from '../components/PhotoSelector';
import FilmSelector from '../components/FilmSelector';

const ResultsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const selectedImageURL = selectedImage ? URL.createObjectURL(selectedImage) : '';

  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.title}>Results</h1>
      <div className={styles.content}>
        <FilmSelector selectedImage={selectedImageURL} />
        <div className={styles.mainContent}>
          <PhotoSelector selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
          {selectedImageURL && <img className={styles.mainImage} src={selectedImageURL} alt="Selected" />}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
