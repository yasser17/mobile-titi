import React, { useEffect } from 'react';

import {
    Header,
    MoreButton,
    PublicationContainer,
    UserImage,
    ImageContainer,
} from './styles';
import { MoreIcon } from '../../assets/icons';

const Publication = ({ company, item }) => {
    return (
        <PublicationContainer>
            <Header>
                <UserImage
                    source={{ uri: company.imageUrl }}
                    resizeMode="contain"
                />
                <MoreButton>
                    <MoreIcon size={24} color="#0C1761" />
                </MoreButton>
            </Header>
            <ImageContainer
                source={{ uri: item.imageUrl }}
                resizeMode="cover"
            />
        </PublicationContainer>
    );
};

export default Publication;
