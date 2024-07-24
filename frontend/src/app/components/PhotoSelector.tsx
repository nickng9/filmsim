'use client';

import React from 'react';
import styles from '../../styles/PhotoSelector.module.css';

interface PhotoSelectorProps {
  photos: string[];
  onSelectImage: (image: string) => void;
}

const PhotoSelector: React.FC<PhotoSelectorProps> = ({ photos, onSelectImage }) => {
  return (
    <div className={styles.photoSelectorContainer}>
      <div className={styles.imageList}>
        {photos.length > 0 ? (
          photos.map((image, index) => (
            <div
              key={index}
              className={styles.imageItem}
              onClick={() => onSelectImage(image)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))
        ) : (
          <p>No images uploaded</p>
        )}
      </div>
    </div>
  );
};

export default PhotoSelector;
