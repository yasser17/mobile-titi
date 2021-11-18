import React, { createContext, useContext, useState } from 'react';
import api from '../service/api';
import path from 'path';

const PublicationContext = createContext({});

export const PublicationProvider = (props) => {
    const [publication, setPublication] = useState({
        image: '',
        type: '',
        description: '',
        company_id: null,
    });

    function updatePublication(data) {
        setPublication({ ...publication, ...data });
    }

    function clear() {
        setPublication({
            image: '',
            description: '',
            company_id: null,
        });
    }

    async function sendPost(description) {
        const form = new FormData();
        const imageData = {
            uri: publication.image,
            type: `image/jpeg`,
            name: publication.image && path.basename(publication.image),
        };

        form.append('image', imageData);
        form.append('description', description);
        form.append('company_id', publication.company_id);

        try {
            await api.post(`/publication/${publication.company_id}`, form, {
                headers: {
                    Accept: 'application/json',
                    'content-type': 'multipart/form-data',
                },
            });
            clear();
        } catch ({ resource }) {
            console.log(resource.data);
        }
    }

    return (
        <PublicationContext.Provider
            value={{ publication, updatePublication, clear, sendPost }}>
            {props.children}
        </PublicationContext.Provider>
    );
};

export function usePublication() {
    const context = useContext(PublicationContext);

    return context;
}
