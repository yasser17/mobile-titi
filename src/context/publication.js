import React, { createContext, useContext, useState } from 'react';

const PublicationContext = createContext({});

export const PublicationProvider = (props) => {
    const [publication, setPublication] = useState({
        image: '',
        details: '',
        company_id: null,
    });

    function updatePublication(data) {
        setPublication({ ...publication, ...data });
    }

    function clear() {
        setPublication({
            image: '',
            details: '',
            company_id: null,
        });
    }

    return (
        <PublicationContext.Provider
            value={{ publication, updatePublication, clear }}>
            {props.children}
        </PublicationContext.Provider>
    );
};

export function usePublication() {
    const context = useContext(PublicationContext);

    return context;
}
