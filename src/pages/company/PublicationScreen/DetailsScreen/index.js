import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';

import { Container, Image, Title, ScrollView } from './styles';
import { usePublication } from '../../../../context/publication';
import { ActivityIndicator, Input } from '../../../../styles';
import { LoginButton, LoginButtonText } from '../../../login/styles';

const DetailsScreen = ({ navigation }) => {
    const { publication } = usePublication();
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { updatePublication, sendPost } = usePublication();

    async function publicate() {
        setIsLoading(true);
        updatePublication({ description });

        await sendPost();
        setIsLoading(false);
        navigation.navigate('CompanyScreen', { screen: 'HomeScreen' });
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled={Platform.OS === 'ios'}
            style={{ flex: 1 }}>
            <Container>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Title>Complete tu Publicación</Title>
                    <Image
                        source={{ uri: publication.image }}
                        resizeMode="cover"
                    />
                    <Input
                        placeholder="Ingrese una descripción de la publicación"
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={setDescription}
                    />

                    <LoginButton
                        onPress={() => publicate()}
                        disabled={isLoading}>
                        {isLoading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <LoginButtonText>Publicar</LoginButtonText>
                        )}
                    </LoginButton>
                </ScrollView>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default DetailsScreen;
