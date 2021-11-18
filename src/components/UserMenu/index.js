import React, { useState } from 'react';
import { useAuth } from '../../context/auth';
import { PrimaryButton, PrimaryButtonText } from '../../styles';

import { Container, Modal } from './styles';

const UserMenu = ({ onSwipeComplete, swipeDirection }) => {
    const { signOut, isModalVisible, toggleModal } = useAuth();

    function log() {
        signOut();
        toggleModal();
    }

    return (
        <Modal
            isVisible={isModalVisible}
            onSwipeComplete={() => toggleModal()}
            swipeDirection={swipeDirection}>
            <Container>
                <PrimaryButton onPress={() => log()}>
                    <PrimaryButtonText>Salir</PrimaryButtonText>
                </PrimaryButton>
            </Container>
        </Modal>
    );
};

export default UserMenu;
