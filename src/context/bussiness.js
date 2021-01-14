import React, { createContext, useContext, useState } from 'react';

const BussinessContext = createContext({});

export const BussinesProvider = (props) => {
    const [bussiness, setBussiness] = useState({
        name: '',
        details: '',
        email: '',
        phone: '',
        category_id: '',
    });

    function updateBussiness(data) {
        setBussiness({ ...bussiness, ...data });
    }

    function clear() {
        setBussiness({
            name: '',
            details: '',
            email: '',
            phone: '',
            category_id: '',
        });
    }

    return (
        <BussinessContext.Provider value={{ bussiness, updateBussiness }}>
            {props.children}
        </BussinessContext.Provider>
    );
};

export function useBussiness() {
    const context = useContext(BussinessContext);

    return context;
}
