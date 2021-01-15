import React, { createContext, useContext, useState } from 'react';

const BussinessContext = createContext({});

export const BussinesProvider = (props) => {
    const [bussiness, setBussiness] = useState({
        name: '',
        details: '',
        email: '',
        phone: '',
        category_id: '',
        address: '',
        city: '',
        country: ''
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
        <BussinessContext.Provider value={{ bussiness, updateBussiness, clear }}>
            {props.children}
        </BussinessContext.Provider>
    );
};

export function useBussiness() {
    const context = useContext(BussinessContext);

    return context;
}
