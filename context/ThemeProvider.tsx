'use client';

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
    mode: string;
    setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize state directly from localStorage or default to 'light'
    const [mode, setMode] = useState<string>(localStorage.getItem('themeMode') ?? 'light');

    useEffect(() => {
        // Update the class on the body element whenever the mode changes
        document.body.classList.toggle('dark', mode === 'dark');
        // Persist mode changes to localStorage
        localStorage.setItem('themeMode', mode);
    }, [mode]);

    const toggleMode = () => {
        // Simply toggle between 'light' and 'dark' modes
        setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ mode, setMode: toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
