import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { Container, InputContainer, MessageContanier } from './styles';
import { Input } from '../../../styles';

const ChatScreen = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            enabled={true}
            behavior="padding">
            <Container>
                <MessageContanier></MessageContanier>
                <InputContainer>
                    <Input />
                </InputContainer>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default ChatScreen;
