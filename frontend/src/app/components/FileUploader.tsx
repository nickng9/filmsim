'use client';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Upload.module.css';
import { useAppDispatch } from '../../lib/hooks';
import { setPhotos } from '@/lib/features/photos/photosSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';

const FileUploader = () => {
    const router = useRouter();  // Use the useRouter hook to handle routing
    const dispatch = useAppDispatch();
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [showLoading, setShowLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        let files: File[] = [];
        if ('files' in event.target && event.target.files) {
            files = Array.from(event.target.files);
        } else if ('dataTransfer' in event && event.dataTransfer) {
            files = Array.from(event.dataTransfer.files);
        }
        if (files.length > 10) {
            setErrorMessage('Error: Cannot upload more than 10 files at once');
        } else if (getTotalFileSize([...selectedFiles, ...files]) > 25) {
            setErrorMessage('Error: Max total upload size is 25mb');
        } else {
            setErrorMessage('');
            setSelectedFiles(prevFiles => [...prevFiles, ...files]);
        }
    };

    const getTotalFileSize = (files: File[]) => {
        return files.reduce((sum, file) => sum + file.size, 0) / 1000000; // Convert bytes to megabytes
    };

    const filesToBufferArray = async (files: File[]) => {
        return Promise.all(files.map(fileToBase64));
    };

    const fileToBase64 = (file: File) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });

    const handleSubmit = async () => {
        if (selectedFiles.length > 0) {
            setShowLoading(true);
            const bufferArray = await filesToBufferArray(selectedFiles);
            dispatch(setPhotos(bufferArray));  // Assuming these are paths or base64 strings
            setShowLoading(false);
            router.push('/results');  // Navigate to results after setting photos
        }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.header}>
                    <h2>Upload File</h2>
                    <Link href="/" className={styles.exitButton}><h1>&times;</h1></Link>
                </div>
                <label htmlFor="fileInput" className={styles.uploadArea} onDragOver={(e) => e.preventDefault()} onDrop={handleFileChange}>
                    <input id="fileInput" type="file" multiple accept=".jpg,.png" onChange={handleFileChange} className={styles.fileInput} />
                    <p>Drag and drop your file here or <span className={styles.browse}>Browse</span></p>
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
                                <button className={styles.deleteButton} onClick={() => setSelectedFiles(selectedFiles.filter((_, i) => i !== index))}>&times;</button>
                            </div>
                        ))}
                    </div>
                )}
                <h3>{errorMessage}</h3>
                <div className={styles.actions}>
                    <button className={styles.cancelButton} onClick={() => setSelectedFiles([])}>Cancel</button>
                    <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
                </div>
                {showLoading && <CircularProgress />}
            </div>
        </div>
    );
};

export default FileUploader;
