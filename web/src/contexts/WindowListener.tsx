import React from 'react';

import { createContext, ReactNode, useEffect, useState } from "react";
import { FetchData } from "../utils/FetchData";

interface WindowListenerProviderProps {
    children: ReactNode;
}

interface IEvent {
    data: {
        action: string,
        value: any
    }
}

interface IWindowListenerData {
    isActive: boolean
}

export const WindowListenerContext = createContext({} as IWindowListenerData)

export function WindowListenerProvider({ children }: WindowListenerProviderProps) {
    const [isActive, setActive] = useState(false)

    function handleNuiEvent(event: IEvent) {
        const { data: { action, value } } = event
        switch (action) {
            case "SET_ACTIVE":
                setActive(value)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        window.addEventListener('message', handleNuiEvent);
        return () => {
            window.removeEventListener('message', handleNuiEvent);
        }
    }, [])

    return (
        <WindowListenerContext.Provider value={{
            isActive
        }}>
            {children}
        </WindowListenerContext.Provider>
    );
}