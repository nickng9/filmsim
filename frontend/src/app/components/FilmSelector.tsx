// src/app/components/FilmSelector.tsx
import React, { useState, useEffect } from 'react';
import styles from '../../styles/FilmSelector.module.css';
import filmData, { FilmData } from '@/lib/filmData';
import { processPhoto } from '@/lib/api';

type Category = 'bw' | 'colour';
type Brand = keyof FilmData['bw'] | keyof FilmData['colour'];

const FilmSelector: React.FC<{ selectedImage: string | null }> = ({ selectedImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('bw');
  const [selectedBrand, setSelectedBrand] = useState<Brand>('ilford');
  const [appliedFilm, setAppliedFilm] = useState<{ [key: string]: string }>({});
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage && appliedFilm[selectedImage]) {
      processPhoto(selectedImage, appliedFilm[selectedImage])
        .then((result) => setProcessedImage(result));
    }
  }, [selectedImage, appliedFilm]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setSelectedBrand(Object.keys(filmData[category])[0] as Brand);
  };

  const handleBrandChange = (brand: Brand) => {
    setSelectedBrand(brand);
  };

  const handleFilmStockSelect = (film: string) => {
    if (selectedImage) {
      setAppliedFilm((prev) => ({ ...prev, [selectedImage]: film }));
      processPhoto(selectedImage, film)
        .then((result) => setProcessedImage(result));
    }
  };

  const films = filmData[selectedCategory][selectedBrand as keyof (typeof filmData)['bw' | 'colour']] as string[];

  return (
    <div className={styles.filmSelectorContainer}>
      <div className={styles.categoryButtons}>
        <button
          className={`${styles.categoryButton} ${selectedCategory === 'bw' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('bw')}
        >
          Black & White
        </button>
        <button
          className={`${styles.categoryButton} ${selectedCategory === 'colour' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('colour')}
        >
          Colour
        </button>
      </div>
      <div className={styles.brandButtons}>
        {Object.keys(filmData[selectedCategory]).map((brand) => (
          <button
            key={brand}
            className={`${styles.brandButton} ${selectedBrand === brand ? styles.active : ''}`}
            onClick={() => handleBrandChange(brand as Brand)}
          >
            {brand}
          </button>
        ))}
      </div>
      <div className={styles.filmList}>
        {films.map((film) => (
          <div
            key={film}
            className={`${styles.filmItem} ${appliedFilm[selectedImage || ''] === film ? styles.selected : ''}`}
            onClick={() => handleFilmStockSelect(film)}
          >
            {film}
          </div>
        ))}
      </div>
      <div className={styles.processedPreview}>
        {processedImage ? <img src={processedImage} alt="Processed" /> : 'Select a film stock'}
      </div>
    </div>
  );
};

export default FilmSelector;
