// src/app/layout.tsx
import '../globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
        <Navbar />
        {children}
    </section>
  );
}
