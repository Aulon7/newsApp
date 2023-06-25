'use client';

import { ThemeProvider } from 'next-themes';

type Children = {
  children: React.ReactNode;
};
const LayoutProvider = ({ children }: Children) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  );
};

export default LayoutProvider;
