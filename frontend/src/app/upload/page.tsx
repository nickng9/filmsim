// src/app/upload/page.tsx
import styles from '../../styles/Upload.module.css';
import RandomImageGrid from '../components/RandomImageGrid';
import FileUploader from '../components/FileUploader';
import StoreProvider from '../StoreProvider';

const HomePage: React.FC = () => {
  return (
    <StoreProvider>
        <div className={styles.container}>
        <div className={styles.mainContent}>
            <FileUploader />
            <RandomImageGrid />
        </div>
        </div>
    </StoreProvider>
  );
};

export default HomePage;
