// src/app/StoreProvider.tsx
'use client';

import { Provider } from 'react-redux';
import { makeStore } from '../lib/store';

const store = makeStore();

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
