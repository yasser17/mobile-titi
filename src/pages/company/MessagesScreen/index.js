import React from 'react';
import { View } from 'react-native';
import ListMessage from '../../../components/ListMessage';

import { Container, ScrollContainer } from './styles';

const MessagesScreen = ({ navigation }) => {
    function redirectToChat() {
        navigation.navigate('ChatScreen');
    }

    return (
        <Container>
            <ScrollContainer>
                <ListMessage
                    image={require('../../../assets/8.png')}
                    handleToRedirect={() => redirectToChat()}
                />
                <ListMessage
                    image={require('../../../assets/6.png')}
                    handleToRedirect={() => redirectToChat()}
                />
                <ListMessage
                    image={require('../../../assets/8.png')}
                    handleToRedirect={() => redirectToChat()}
                />
                <ListMessage
                    image={require('../../../assets/6.png')}
                    handleToRedirect={() => redirectToChat()}
                />
                <ListMessage
                    image={require('../../../assets/8.png')}
                    handleToRedirect={() => redirectToChat()}
                />
                <ListMessage
                    image={require('../../../assets/6.png')}
                    handleToRedirect={() => redirectToChat()}
                />
                <ListMessage
                    image={require('../../../assets/8.png')}
                    handleToRedirect={() => redirectToChat()}
                />
                <ListMessage
                    image={require('../../../assets/6.png')}
                    handleToRedirect={() => redirectToChat()}
                />
                <ListMessage
                    image={require('../../../assets/8.png')}
                    handleToRedirect={() => redirectToChat()}
                />
                <ListMessage
                    image={require('../../../assets/6.png')}
                    handleToRedirect={() => redirectToChat()}
                />
            </ScrollContainer>
        </Container>
    );
};

export default MessagesScreen;
