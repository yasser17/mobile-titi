import React from 'react';

import { useAuth } from '../../context/auth';
import { Container, Link, LinkText, ScrollHorizontal, Row, Button, ImageBackground, ButtonText } from './styles';

const home = ({ navigation }) => {
    const { signOut } = useAuth();

    return (
        <Container>
            <ScrollHorizontal showsVerticalScrollIndicator={false}>
                <Row>
                    <Button onPress={()=> navigation.navigate('Map')}>
                        <ImageBackground source={require('../../assets/compass.png')} >
                            <ButtonText>Negocios Locales</ButtonText>
                        </ImageBackground>
                    </Button>
                    <Button>
                        
                    </Button>
                </Row>
                <Row>
                    <Link onPress={() => signOut()}>
                        <LinkText>Salir</LinkText>
                    </Link>
                </Row>
            </ScrollHorizontal>
        </Container>
    );
};

export default home;
