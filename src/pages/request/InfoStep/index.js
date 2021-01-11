import React from 'react';
import { View, Platform } from 'react-native';

import { useErrors } from '../../../context/errors';

import {
    Container,
    FormContanier,
    Market,
    MarketContainer,
    KeyboardAvoidingView,
    Scroll,
    Text,
} from './styles';

import {
    ErrorMessage,
    Input,
    PrimaryButton,
    PrimaryButtonText,
} from '../../../styles';
import { useBussiness } from '../../../context/bussiness';

const request = ({ navigation }) => {
    const { hasError, getError } = useErrors();
    const { updateBussiness } = useBussiness();

    function handleToRedirectToMap() {
        navigation.navigate('BussinesRequestLocation')
    } 

    return (
        <KeyboardAvoidingView
            enabled={Platform.OS === 'ios' ? true : false}
            behavior="padding">
            <Container>
                <Scroll showsHorizontalScrollIndicator={false}>
                    <MarketContainer>
                        <Market />
                    </MarketContainer>
                    <FormContanier>
                        <Text>
                            Bienvenido al alta de empresas, poporcione los datos
                            para que podamos agregar su empresa al listado de
                            TitiPoint
                        </Text>

                        <Input placeholder="Nombre del Negocio" />
                        <ErrorMessage active={hasError('name')}>
                            {getError('name', 'nombre')}
                        </ErrorMessage>

                        <Input
                            placeholder="Escriba una descipción corta de sus negocio..."
                            multiline={true}
                            numberOfLines={5}
                        />
                        <ErrorMessage active={hasError('name')}>
                            {getError('name', 'nombre')}
                        </ErrorMessage>

                        <Input
                            placeholder="Email"
                        />
                        <ErrorMessage active={hasError('email')}>
                            {getError('email', 'email')}
                        </ErrorMessage>

                        <Input
                            placeholder="Teléfono"
                        />
                        <ErrorMessage active={hasError('phone')}>
                            {getError('phone', 'teléfono')}
                        </ErrorMessage>

                        <PrimaryButton onPress={() => handleToRedirectToMap() }>
                            <PrimaryButtonText>Siguiente</PrimaryButtonText>
                        </PrimaryButton>
                    </FormContanier>
                </Scroll>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default request;
