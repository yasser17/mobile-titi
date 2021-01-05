import React, { useState } from 'react';
import { Input } from '../../pages/register/styles';
import { PrimaryButton, PrimaryButtonText } from '../../styles';

import { Container, Modal, Title } from './styles';

const ForgotModal = ({ isVisible, onSwipeComplete, swipeDirection }) => {
    const [email, setEmail] = useState('');

    function resetPassword() {
        onSwipeComplete();
    }

    return (
        <Modal
            isVisible={isVisible}
            onSwipeComplete={() => onSwipeComplete()}
            swipeDirection={swipeDirection}>
            <Container>
                <Title>Ingrese su correo electrónico</Title>
                <Input
                    onChangeText={setEmail}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoCorrect={false}
                />
                <PrimaryButton onPress={() => resetPassword()}>
                    <PrimaryButtonText>Resetear Contraseña</PrimaryButtonText>
                </PrimaryButton>
            </Container>
        </Modal>
    );
};

export default ForgotModal;
