// src/app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';

import React, { ReactNode } from 'react';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
