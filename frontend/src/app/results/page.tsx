'use client';
import React, { useState } from 'react';
import styles from '../../styles/Results.module.css';
import PhotoSelector from '../components/PhotoSelector';
import FilmSelector from '../components/FilmSelector';

const ResultsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const selectedImageURL = selectedImage ? URL.createObjectURL(selectedImage) : '';
  const [filteredImage, setfilteredImage] = useState('')

  const getSelectedImage = (image: string) => {
    if (image) {
      const fileType: string = image.split(':').pop()?.split(';')[0] || 'default/filetype';
      const base64Str = image.split(',').pop() as string;
      const imageContent = atob(base64Str);
      const buffer = new ArrayBuffer(imageContent.length);
      const view = new Uint8Array(buffer);
    
      for (let n = 0; n < imageContent.length; n++) {
        view[n] = imageContent.charCodeAt(n);
      }

      const blob = new Blob([buffer], { type: fileType });
      const file = new File([blob], `${new Date().toISOString()}`, { lastModified: new Date().getTime(), type: fileType });
      setSelectedImage(file);
    }
  };

  const getFilteredImage = (image: string) => {
    setfilteredImage(image);
  }

  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.title}>Results</h1>
      <div className={styles.content}>
        <FilmSelector selectedImage={selectedImageURL} imageFile={selectedImage} getFilteredImage={getFilteredImage}/>
        <div className={styles.mainContent}>
          <PhotoSelector getSelectedImage={getSelectedImage} filteredImage={filteredImage} />
          {selectedImageURL && <img className={styles.mainImage} src={selectedImageURL} alt="Selected" />}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
