// src/app/upload/page.tsx
import styles from '../../styles/Upload.module.css';
import RandomImageGrid from '../components/RandomImageGrid';
import FileUploader from '../components/FileUploader';

const UploadPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <FileUploader />
        <RandomImageGrid />
      </div>
    </div>
  );
};

export default UploadPage;
