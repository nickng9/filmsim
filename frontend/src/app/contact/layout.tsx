// src/app/contact/layout.tsx
import '../globals.css';
import Navbar from '../components/Navbar';

export default function ContactLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
