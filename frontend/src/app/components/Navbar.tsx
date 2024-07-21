
// src/app/components/Navbar.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={pathname === '/' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          FILMOGRAPHY
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={pathname === '/' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/upload" className={pathname === '/upload' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Upload
          </Link>
        </li>
        <li>
          <Link href="/catalogue" className={pathname === '/catalogue' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Catalogue
          </Link>
        </li>
        <li>
          <Link href="/community" className={pathname === '/community' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Community
          </Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === '/contact' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/account" className={pathname === '/account' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            My Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;