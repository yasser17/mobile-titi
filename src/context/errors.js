import React, { createContext, useState, useContext } from 'react';

const ErrorContext = createContext({});

export const ErrorProvider = (props) => {
    const [errors, setErrors] = useState([]);

    function updateErrors(errorsData) {
        setErrors(errorsData);
    }

    function hasError(name) {
        if (
            Array.isArray(errors) &&
            errors.filter((x) => x.field === name).length > 0
        ) {
            return true;
        }
        return false;
    }

    function getError(name, locale) {
        if (hasError(name)) {
            const message = errors.filter((x) => x.field === name)[0].message;
            return message.replace(name, locale);
        }
        return '';
    }

    return (
        <ErrorContext.Provider value={{ hasError, getError, updateErrors }}>
            {props.children}
        </ErrorContext.Provider>
    );
};

export function useErrors() {
    const context = useContext(ErrorContext);

    return context;
}
