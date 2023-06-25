'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import DayNightToggle from 'react-day-and-night-toggle';

const DarkMode = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const toggleTheme = currentTheme === 'dark' ? 'light' : 'dark';

  return (
    <div>
      <DayNightToggle onChange={() => setTheme(toggleTheme)} checked={currentTheme === 'dark'} animationInactive={false} />
    </div>
  );
};

export default DarkMode;
