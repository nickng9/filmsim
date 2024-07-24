// src/app/upload/layout.tsx

import StoreProvider from '../StoreProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
}
