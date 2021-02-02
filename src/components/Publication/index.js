import React from 'react';

import { Header, MoreButton, PublicationContainer, UserImage, ImageContainer } from './styles';
import {MoreIcon} from '../../assets/icons'

const Publication = () => {
    return (
        <PublicationContainer>
            <Header>
                <UserImage
                    source={require('../../assets/profile-picture.png')}
                    resizeMode="contain"
                />
                <MoreButton>
                    <MoreIcon size={24} color="#0C1761" />
                </MoreButton>
            </Header>
            <ImageContainer source={require('../../assets/publication_model.png')} resizeMode="cover" />
        </PublicationContainer>
    );
};

export default Publication;
