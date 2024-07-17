// src/app/page.tsx
import styles from '../styles/Home.module.css';
import RandomImageGrid from './components/RandomImageGrid';
import UploadButton from './components/UploadButton';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>FILMOGRAPHY</h1>
        <p className={styles.subtitle}>Standard Photos. Extraordinary Results.</p>
        <RandomImageGrid />
        <UploadButton />
      </div>
    </div>
  );
};

export default HomePage;
