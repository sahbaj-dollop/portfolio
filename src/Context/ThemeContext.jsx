// ThemeContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { playToggleSound } from "../utils/soundEffects";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [darkMode] = useState(false);

  const [recruiterMode, setRecruiterMode] = useState(() => {
    const saved = localStorage.getItem('recruiterMode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('soundEnabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', 'false');
    document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('recruiterMode', JSON.stringify(recruiterMode));
  }, [recruiterMode]);

  useEffect(() => {
    localStorage.setItem('soundEnabled', JSON.stringify(soundEnabled));
  }, [soundEnabled]);



  const toggleRecruiterMode = () => {
    setRecruiterMode(prev => {
      playToggleSound(!prev, soundEnabled);
      return !prev;
    });
  };

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const next = !prev;
      if (next) playToggleSound(true, true);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ 
      darkMode,  
      recruiterMode, 
      toggleRecruiterMode,
      soundEnabled,
      toggleSound 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
