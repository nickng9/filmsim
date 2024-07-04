"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { processPicture } from "../routes/routes";
import { ProcessedPictureType } from '@/types/processedPicture';

export default function Home() {
  const [picture, setPicture] = useState('');
  const [showProcessedPic, setShowProcessedPic] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [validFileTypeMessage, setValidFileTypeMessage] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  const handleFileChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && (event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'image/png')) {
      setSelectedFile(event.target.files[0]);
      setValidFileTypeMessage('')
    } else {
      setValidFileTypeMessage('Not a valid file type, only png or jpeg allowed.')
    }
  };

  const getPicture = async() => {
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('picture', selectedFile);
        formData.append('filmStock', 'Fuji')
        formData.append('iso', '400')
        setShowLoading(true);
        const res: ProcessedPictureType = await processPicture(formData);
        setPicture(`data:image/png;base64,${res.img}`);
        setShowProcessedPic(true);
        setShowLoading(false);
      }
    } catch(err: any) {
      console.error(err);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div>
      <input type="file" onChange={handleFileChange} />

      <h1>{validFileTypeMessage}</h1>
    
      {selectedFile && (
        <div>
          <h2>Selected File:</h2>
          <p>Name: {selectedFile.name}</p>
          <p>Type: {selectedFile.type}</p>
          <p>Size: {selectedFile.size} bytes</p>
        </div>
      )}
    </div>

      <button onClick={getPicture}><h1>Button</h1></button>
      <div className={styles.center}>
          {showLoading && <CircularProgress />}
          {showProcessedPic && <img src={picture} width='50%' height='50%'/>}
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
