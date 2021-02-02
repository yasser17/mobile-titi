import React from 'react';
import { StatusBar, Platform } from 'react-native';

import { useAuth } from '../../context/auth';
import {
    Container,
    Link,
    LinkText,
    ScrollHorizontal,
    Row,
    Button,
    KeyboardAvoidingView,
    ButtonText,
    TextContainer,
    ButtonTitle,
    ImageContainer,
    ButtonImage,
} from './styles';

const home = ({ navigation }) => {
    
    return (
        <KeyboardAvoidingView
            enabled={Platform.OS === 'ios'}
            behavior="padding">
            <ScrollHorizontal showsVerticalScrollIndicator={false}>
                <Container>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#052E64"
                    />
                    <Row>
                        <Button
                            onPress={() => navigation.navigate('Map')}
                            style={{ backgroundColor: '#ff3399' }}>
                            <TextContainer>
                                <ButtonTitle>Titi Chats</ButtonTitle>
                                <ButtonText>
                                    Interactúa y diviértete conociendo la
                                    opinión de amigos, negocios y mucho más
                                </ButtonText>
                            </TextContainer>
                            <ImageContainer>
                                <ButtonImage
                                    source={require('../../assets/chat.png')}
                                    resizeMode="contain"
                                />
                            </ImageContainer>
                        </Button>
                    </Row>
                    <Row>
                        <Button
                            onPress={() => navigation.navigate('CompanyScreen')}
                            style={{ backgroundColor: '#0070c0' }}>
                            <TextContainer>
                                <ButtonTitle>Titi Amigos</ButtonTitle>
                                <ButtonText>
                                    Conoce personas, haz amigos, negocios y
                                    mucho más
                                </ButtonText>
                            </TextContainer>
                            <ImageContainer>
                                <ButtonImage
                                    source={require('../../assets/amigos.png')}
                                    resizeMode="contain"
                                />
                            </ImageContainer>
                        </Button>
                    </Row>
                    <Row>
                        <Button
                            onPress={() => navigation.navigate('Map')}
                            style={{ backgroundColor: '#92d050' }}>
                            <TextContainer>
                                <ButtonTitle>Titi Cupón</ButtonTitle>
                                <ButtonText>
                                    Disfruta de los mejores despuentos en tus
                                    tiendas favoritas
                                </ButtonText>
                            </TextContainer>
                            <ImageContainer>
                                <ButtonImage
                                    source={require('../../assets/cupon.png')}
                                    resizeMode="contain"
                                />
                            </ImageContainer>
                        </Button>
                    </Row>
                    <Row>
                        <Button
                            onPress={() => navigation.navigate('Map')}
                            style={{ backgroundColor: '#7030a0' }}>
                            <TextContainer>
                                <ButtonTitle>Titi Tiendas</ButtonTitle>
                                <ButtonText>
                                    Disfruta de los mejores despuentos en tus
                                    tiendas favoritas
                                </ButtonText>
                            </TextContainer>
                            <ImageContainer>
                                <ButtonImage
                                    source={require('../../assets/tienda.png')}
                                    resizeMode="contain"
                                />
                            </ImageContainer>
                        </Button>
                    </Row>
                    <Row>
                        <Button
                            onPress={() => navigation.navigate('Map')}
                            style={{ backgroundColor: '#00b0f0' }}>
                            <TextContainer>
                                <ButtonTitle>Titi Taxi</ButtonTitle>
                                <ButtonText>
                                    Ve a los lugares que te gustan a los mejores
                                    precios
                                </ButtonText>
                            </TextContainer>
                            <ImageContainer>
                                <ButtonImage
                                    source={require('../../assets/taxi.png')}
                                    resizeMode="contain"
                                />
                            </ImageContainer>
                        </Button>
                    </Row>
                </Container>
            </ScrollHorizontal>
        </KeyboardAvoidingView>
    );
};

export default home;
