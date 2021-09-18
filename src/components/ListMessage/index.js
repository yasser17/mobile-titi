import React from 'react';
import { View } from 'react-native';

import {
    Container,
    ImageContainer,
    MessageContainer,
    MessageExcerpt,
    TimeContainer,
    UserImage,
    UserName,
} from './styles';

const ListMessage = ({image, handleToRedirect}) => {
    return (
        <Container onPress={() => handleToRedirect()}> 
            <ImageContainer>
                <UserImage source={image} />
            </ImageContainer>
            <MessageContainer>
                <TimeContainer>
                    <MessageExcerpt>3:15 a.m</MessageExcerpt>
                </TimeContainer>
                <UserName>Nombre de Usuario</UserName>
                <MessageExcerpt>Bello feliz y bendecido día</MessageExcerpt>
            </MessageContainer>
        </Container>
    );
};

export default ListMessage;
