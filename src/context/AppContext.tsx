import React, {useState, createContext, useContext, ReactNode} from 'react';

export interface AppContextType {
    showPortfolio: boolean;
    showAbout: boolean;
    setShowPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
    setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({children} : {children: ReactNode}) => {
    const [showPortfolio, setShowPortfolio] = useState<boolean>(false);
    const [showAbout, setShowAbout] = useState<boolean>(false);

    return(
        <AppContext.Provider value={{
            showPortfolio, 
            showAbout, 
            setShowPortfolio, 
            setShowAbout
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(): AppContextType {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }

    return context;
}