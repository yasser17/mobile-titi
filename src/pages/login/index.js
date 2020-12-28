import React, { useState } from 'react';
import { Platform } from 'react-native';

import { useAuth } from '../../context/auth';
import { useErrors } from '../../context/errors';
import {
    ErrorMessage,
    PrimaryButton,
    PrimaryButtonText,
    ActivityIndicator,
} from '../../styles';
import { KeyboardAvoidingView } from '../register/styles';
import {
    Container,
    LogoContainer,
    FormContainer,
    ScrollForm,
    Logo,
    Input,
    ForgotLink,
    ForgotLabel,
} from './styles';

const login = ({ navigation }) => {
    const { signIn } = useAuth();
    const { getError, hasError, updateErrors } = useErrors();

    const [user, setUser] = useState('yasser.mussa@gmail.com');
    const [password, setPassword] = useState('secret');
    const [isLoading, setIsLoading] = useState(false);

    async function storeLogin() {
        setIsLoading(true);
        const userData = { email: user, password };
        if (user === '' && password === '') {
            setIsLoading(false);
            return;
        }
        const response = await signIn(userData);

        if (response) {
            updateErrors(response);
        }
        setIsLoading(false);
    }

    return (
        <KeyboardAvoidingView
            enabled={Platform.OS === 'ios'}
            behavior="padding">
            <Container>
                <LogoContainer>
                    <Logo
                        source={require('../../assets/logo-final.png')}
                        resizeMode="contain"
                    />
                </LogoContainer>
                <FormContainer>
                    <ScrollForm>
                        <Input
                            placeholder="Email"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            autoCorrect={false}
                            onChangeText={setUser}
                            value={user}
                        />
                        <ErrorMessage active={hasError('email')}>
                            {getError('email', 'correo electrónico')}
                        </ErrorMessage>

                        <Input
                            placeholder="Contraseña"
                            secureTextEntry
                            onChangeText={setPassword}
                            value={password}
                        />

                        <PrimaryButton
                            onPress={() => storeLogin()}
                            disabled={isLoading}>
                            {isLoading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <PrimaryButtonText>Entrar</PrimaryButtonText>
                            )}
                        </PrimaryButton>

                        <ForgotLink
                            onPress={() => navigation.navigate('Register')}>
                            <ForgotLabel>Registrarme</ForgotLabel>
                        </ForgotLink>

                        <ForgotLink
                            onPress={() => navigation.navigate('Register')}>
                            <ForgotLabel>¿Olvidaste tu contraseña?</ForgotLabel>
                        </ForgotLink>
                    </ScrollForm>
                </FormContainer>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default login;
