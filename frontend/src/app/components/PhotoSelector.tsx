'use client';

import React, { useState } from 'react';
import { useAppSelector } from '../../lib/hooks';
import styles from '../../styles/PhotoSelector.module.css';
import { PhotoSelectorProps } from '@/types/componentPropsTypes';

const PhotoSelector: React.FC<PhotoSelectorProps> = ({getSelectedImage, filteredImage}) => {
  const photos = useAppSelector(state => state.photos.photos);
  const [selectedImage, setSelectedImage] = useState<string | null>(photos.length > 0 ? photos[0] : null);

  return (
    <div className={styles.photoSelectorContainer}>
      <div className={styles.imagePreviewContainer}>
        <div className={styles.imagePreview}>
          {selectedImage ? <img src={selectedImage} alt="Selected" className={styles.displayImage} /> : 'Select an image'}
        </div>
        <div>
          {filteredImage ? <img src={`data:image/png;base64,${filteredImage}`} className={styles.displayImage}/> : 'No filtered image'}
        </div>
      </div>
      <div className={styles.imageList}>
        {photos.map((image, index) => (
          <div
            key={index}
            className={`${styles.imageItem} ${selectedImage === image ? styles.selected : ''}`}
            onClick={() => {
              setSelectedImage(image);
              getSelectedImage(image);
            }}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSelector;
