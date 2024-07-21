'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Upload.module.css';
// import CircularProgress from '@mui/material/CircularProgress';
import { processRequest } from '../routes/routes';
import { ProcessedPictureType } from '@/types/processedPicture';
import Link from 'next/link';

const FileUploader = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [, setShowLoading] = useState(false);
    // const [res, setRes] = useState('');  
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    // const [uploadProgress, setUploadProgress] = useState<number>(0);
    const previewRef = useRef<HTMLDivElement>(null);
    // const [isOverflow, setIsOverflow] = useState<boolean>(false);

    const getTotalFileSize = (files: File[]) => {
      let size = 0;

      files.forEach(file => {
        size += file.size;
      });

      return size / 1000000;
    };
  
    const handleFileChange = (
      event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLLabelElement>
    ) => {
      event.preventDefault();
      let files: File[] = [];
      if ('files' in event.target && event.target.files) {
        files = Array.from(event.target.files);
      } else if ('dataTransfer' in event && event.dataTransfer) {
        files = Array.from(event.dataTransfer.files);
      }
      if (files.length > 10) {
        setErrorMessage('Error: Can not upload more then 10 files at once');
      } else if (getTotalFileSize(files) > 25) {
        setErrorMessage('Error: Max total upload size is 25mb');
      } else {
        setErrorMessage('');
        setSelectedFiles(files);
      }
      // setUploadProgress(70); // Example progress, adjust as needed
    };

    const handleCancel = () => {
      setSelectedFiles([]);
      // setUploadProgress(0);
      setErrorMessage('');
    };

    const removeFile = (index: number) => {
      const newFiles = selectedFiles.filter((_, i) => i !== index);
      setSelectedFiles(newFiles);
    };

    const fileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = () => {
          if (reader.result) {
            resolve(reader.result.toString());
          } else {
            reject(new Error('Could not convert file to base64 string'));
          }
        };
    
        reader.onerror = () => {
          reject(new Error('File reading error'));
        };
    
        reader.readAsDataURL(file);
      });
    };

    const filesToBufferString = async (files: File[]): Promise<string> => {
      const base64Strings = await Promise.all(files.map(fileToBase64));
      return base64Strings.join(',');
    };

    const handleSubmit = async() => {
        try {
          if (selectedFiles) {
            setShowLoading(true);
            const bufferString = await filesToBufferString(selectedFiles);
            const formData = new FormData();
            formData.append('file', bufferString);
            const res: ProcessedPictureType = await processRequest(formData);
            // setRes(res.message);
            setShowLoading(false);
            // setSelectedFiles(null)
          }
        } catch(err: unknown) {
          console.error(err);
        }
    }

    const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
      event.preventDefault();
    };

    // useEffect(() => {
    //   const checkOverflow = () => {
    //     if (previewRef.current) {
    //       setIsOverflow(previewRef.current.scrollWidth > previewRef.current.clientWidth);
    //     }
    //   };
    //   checkOverflow();
    //   window.addEventListener('resize', checkOverflow);
    //   return () => {
    //     window.removeEventListener('resize', checkOverflow);
    //   };
    // }, [selectedFiles]);

    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.header}>
            <h2>Upload File</h2>
            <Link href="/" className={styles.exitButton}><h1>&times;</h1></Link>
          </div>
          <label 
            htmlFor="fileInput" 
            className={styles.uploadArea}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleFileChange(e)}
          >
            <input
              id="fileInput"
              type="file"
              multiple
              accept=".jpg,.png"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
            <p>
            Drag and drop your file here or{' '}
              <span className={styles.browse}>Browse</span>
            </p>
          </label>
          <div className={styles.supportedFormatsContainer}>
            <p className={styles.supportedFormats}>Supported formats: jpg, png</p>
            <p className={styles.maxSize}>Maximum Size: 25mb, 10 files</p>
          </div>
          {selectedFiles.length > 0 && (
            <div className={styles.preview}>
              {selectedFiles.map((file, index) => (
                <div key={index} className={styles.previewItem}>
                  <img src={URL.createObjectURL(file)} alt="Preview" />
                  <button className={styles.deleteButton} onClick={() => removeFile(index)}>&times;</button>
                </div>
              ))}
              {/* {isOverflow && (
                <div className={styles.moreFiles}>+{selectedFiles.length} more</div>
              )} */}
            </div>
          )}
          {/* <div className={styles.progressBar} style={{ width: `${uploadProgress}%` }}></div> */}
          <h3>{errorMessage}</h3>
          <div className={styles.actions}>
            <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
            <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
};

export default FileUploader;
