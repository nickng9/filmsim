// src/app/components/FilmSelector.tsx
import React, { useState, useEffect } from 'react';
import styles from '../../styles/FilmSelector.module.css';
import filmData, { FilmData } from '@/types/filmData';
import { processPhotos } from '../routes/processPhotos';
import { FilmSelectorProps } from '@/types/componentPropsTypes';

type Category = 'bw' | 'colour';
type Brand = keyof FilmData['bw'] | keyof FilmData['colour'];

const FilmSelector: React.FC<FilmSelectorProps> = ({ selectedImage, imageFile }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('bw');
  const [selectedBrand, setSelectedBrand] = useState<Brand>('ilford');
  const [appliedFilm, setAppliedFilm] = useState<{ [key: string]: string }>({});
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<Category | null>(null);
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);

  // useEffect(() => {
  //   if (selectedImage && appliedFilm[selectedImage]) {
  //     processPhoto(selectedImage, appliedFilm[selectedImage])
  //       .then((result) => setProcessedImage(result));
  //   }
  // }, [selectedImage, appliedFilm]);

  const handleCategoryToggle = (category: Category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleBrandToggle = (brand: string) => {
    setExpandedBrand(expandedBrand === brand ? null : brand);
  };

  const handleFilmStockSelect = async (film: string) => {
    try {
      if (selectedImage && imageFile) {
        setAppliedFilm((prev) => ({ ...prev, [selectedImage]: film }));
        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('filmStock', film);
        const result: any = await processPhotos(formData);
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const formatFilmName = (film: string) => {
    const name = film.split('/').pop();
    return name ? name.replace(/_/g, ' ').replace('.png', '') : '';
  };

  return (
    <div className={styles.filmSelectorContainer}>
      <div className={styles.categoryButtons}>
        <button
          className={`${styles.categoryButton} ${expandedCategory === 'bw' ? styles.active : ''}`}
          onClick={() => handleCategoryToggle('bw')}
        >
          Black & White {expandedCategory === 'bw' ? '▲' : '▼'}
        </button>
        {expandedCategory === 'bw' && (
          <div className={styles.brandButtons}>
            {Object.keys(filmData.bw).map((brand) => (
              <div key={brand}>
                <button
                  className={`${styles.brandButton} ${expandedBrand === brand ? styles.active : ''}`}
                  onClick={() => handleBrandToggle(brand)}
                >
                  {brand} {expandedBrand === brand ? '▲' : '▼'}
                </button>
                {expandedBrand === brand && (
                  <div className={styles.filmList}>
                    {filmData.bw[brand as keyof typeof filmData.bw].map((film) => (
                      <div
                        key={film}
                        className={`${styles.filmItem} ${appliedFilm[selectedImage || ''] === film ? styles.selected : ''}`}
                        onClick={() => handleFilmStockSelect(film)}
                      >
                        {formatFilmName(film)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <button
          className={`${styles.categoryButton} ${expandedCategory === 'colour' ? styles.active : ''}`}
          onClick={() => handleCategoryToggle('colour')}
        >
          Colour {expandedCategory === 'colour' ? '▲' : '▼'}
        </button>
        {expandedCategory === 'colour' && (
          <div className={styles.brandButtons}>
            {Object.keys(filmData.colour).map((brand) => (
              <div key={brand}>
                <button
                  className={`${styles.brandButton} ${expandedBrand === brand ? styles.active : ''}`}
                  onClick={() => handleBrandToggle(brand)}
                >
                  {brand} {expandedBrand === brand ? '▲' : '▼'}
                </button>
                {expandedBrand === brand && (
                  <div className={styles.filmList}>
                    {filmData.colour[brand as keyof typeof filmData.colour].map((film) => (
                      <div
                        key={film}
                        className={`${styles.filmItem} ${appliedFilm[selectedImage || ''] === film ? styles.selected : ''}`}
                        onClick={() => handleFilmStockSelect(film)}
                      >
                        {formatFilmName(film)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.processedPreview}>
        {processedImage ? <img src={processedImage} alt="Processed" /> : 'Select a film stock'}
      </div>
    </div>
  );
};

export default FilmSelector;
