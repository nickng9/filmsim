'use client';

import React, { useState } from 'react';
import styles from '../../styles/Results.module.css';
import PhotoSelector from '../components/PhotoSelector';
import FilmSelector from '../components/FilmSelector';
import { useAppSelector } from '../../lib/hooks';

const ResultsPage: React.FC = () => {
  const photos = useAppSelector((state) => state.photos.photos);
  const [selectedImage, setSelectedImage] = useState<string | null>(photos.length > 0 ? photos[0] : null);

  return (
    <div className={styles.resultsContainer}>
      <h1>Results</h1>
      <PhotoSelector photos={photos} onSelectImage={setSelectedImage} />
      {selectedImage && <FilmSelector selectedImage={selectedImage} />}
    </div>
  );
};

export default ResultsPage;
