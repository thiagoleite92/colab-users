import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const context = {
    isLoading,
    setIsLoading,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
