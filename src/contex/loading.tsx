import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && (
        <div className="fixed inset-0 bg-[#fafafa] dark:bg-[#060818] z-[60] place-content-center flex justify-center items-center h-screen">
          <span className="loading loading-bars loading-lg text-info"></span>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
