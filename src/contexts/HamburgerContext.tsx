import React, { createContext, useContext, useState } from 'react';

type HamburgerContextType = {
    isOpen: boolean;
    toggleHamburger: () => void;
};

const HamburgerContext = createContext<HamburgerContextType | undefined>(undefined);

export function HamburgerProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleHamburger = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <HamburgerContext.Provider value={{ isOpen, toggleHamburger }}>
            {children}
        </HamburgerContext.Provider>
    );
}

export function useHamburger() {
    const context = useContext(HamburgerContext);
    if (context === undefined) {
        throw new Error('useHamburger must be used within a HamburgerProvider');
    }
    return context;
}
