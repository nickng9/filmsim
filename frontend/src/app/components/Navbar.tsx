// src/app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">FILMOGRAPHY</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/upload">Upload</Link>
        <Link href="/catalogue">Catalogue</Link>
        <Link href="/community">Community</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/account">My Account</Link>
      </div>
    </nav>
  );
};

export default Navbar;
