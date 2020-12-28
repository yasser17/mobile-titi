import React, { useState } from 'react';
import { Platform, StatusBar } from 'react-native';

import { useAuth } from '../../context/auth';
import { useErrors } from '../../context/errors';
import api from '../../service/api';
import {
    ErrorMessage,
    Input,
    PrimaryButton,
    PrimaryButtonText,
    ActivityIndicator,
} from '../../styles';
import {
    KeyboardAvoidingView,
    ScrollView,
    Container,
    LogoContainer,
    Logo,
    FormContainer,
} from './styles';

const register = () => {
    const { signInSocialMedia } = useAuth();
    const { hasError, getError, updateErrors } = useErrors();

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    function storeRegister() {
        setIsLoading(true);
        api.post('/register', {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
        })
            .then(({ data }) => {
                signInSocialMedia(data);
            })
            .catch(({ response }) => {
                updateErrors(response.data);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <KeyboardAvoidingView
            enabled={Platform.OS === 'ios'}
            behavior="padding">
            <Container>
                <StatusBar
                    barStyle="dark-content"
                    translucent
                    backgroundColor="transparent"
                />
                <LogoContainer>
                    <Logo
                        source={require('../../assets/logo-final.png')}
                        resizeMode="contain"
                    />
                </LogoContainer>
                <FormContainer>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Input
                            placeholder="Nombre"
                            autoCorrect={false}
                            onChangeText={setName}
                        />
                        <ErrorMessage active={hasError('name')}>
                            {getError('name', 'nombre')}
                        </ErrorMessage>

                        <Input
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={setEmail}
                        />
                        <ErrorMessage active={hasError('email')}>
                            {getError('email', 'email')}
                        </ErrorMessage>

                        <Input
                            placeholder="Contraseña"
                            secureTextEntry
                            onChangeText={setPassword}
                        />
                        <ErrorMessage active={hasError('name')}>
                            {getError('password', 'contraseña')}
                        </ErrorMessage>

                        <Input
                            placeholder="Repita Contraseña"
                            secureTextEntry
                            onChangeText={setPasswordConfirmation}
                        />

                        <PrimaryButton
                            onPress={() => storeRegister()}
                            disabled={isLoading}>
                            {isLoading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <PrimaryButtonText>
                                    Registrarme
                                </PrimaryButtonText>
                            )}
                        </PrimaryButton>
                    </ScrollView>
                </FormContainer>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default register;
