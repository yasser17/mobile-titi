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
    Background,
    Form,
    Titi,
    LoginButton,
    LoginButtonText,
    RegisterForm,
    RegisterText,
    RegisterLabel,
    RegisterLink
} from './styles';

const login = ({ navigation }) => {
    const { signIn } = useAuth();
    const { getError, hasError, updateErrors } = useErrors();

    const [user, setUser] = useState('');
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
                <Background
                    source={require('../../assets/bg-login.png')}
                    resizeMode="cover">
                    <LogoContainer>
                        <Logo
                            source={require('../../assets/logo.png')}
                            resizeMode="contain"
                        />
                    </LogoContainer>
                    <FormContainer>
                        <ScrollForm>
                            <Form>
                                <Titi
                                    source={require('../../assets/titipoint.png')}
                                    resizeMode="contain"
                                />
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

                                <LoginButton
                                    onPress={() => storeLogin()}
                                    disabled={isLoading}>
                                    {isLoading ? (
                                        <ActivityIndicator color="#fff" />
                                    ) : (
                                        <LoginButtonText>
                                            Iniciar Sesión
                                        </LoginButtonText>
                                    )}
                                </LoginButton>
                            </Form>

                            <ForgotLink
                                onPress={() => navigation.navigate('Register')}>
                                <ForgotLabel>
                                    ¿Olvidaste tu contraseña?
                                </ForgotLabel>
                            </ForgotLink>

                            <RegisterForm>
                                <RegisterText>¿No tienes cuenta?</RegisterText>
                                <RegisterLink
                                    onPress={() =>
                                        navigation.navigate('Register')
                                    }>
                                    <RegisterLabel>Registrarme</RegisterLabel>
                                </RegisterLink>
                            </RegisterForm>
                        </ScrollForm>
                    </FormContainer>
                </Background>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default login;
