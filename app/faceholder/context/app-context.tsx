'use client';

import React from 'react';


export interface Face {
  id?: number;
  name: string;
  url: string;
}

export interface IFacesContext {
  // TODO:
}

const AppContext = React.createContext<
  [number, React.Dispatch<React.SetStateAction<number>>] | undefined
>(undefined);

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = React.useState(0);
  return (
    <AppContext.Provider value={[count, setCount]}>
      {children}
    </AppContext.Provider>
  );
}

export function useCounter() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}