import React, { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

import {
    ButtonsContainer,
    CameraView,
    ChangeCamaraButton,
    Container,
    FilesButton,
    NotPermission,
    NotPermissionText,
    TakePhotoButton,
} from './styles';
import { ActivityIndicator } from 'react-native';
import { CamaraIcon, ImageIcon, RefreshIcon } from '../../../../assets/icons';
import { usePublication } from '../../../../context/publication';

const PublicationScreen = ({ navigation }) => {
    const { updatePublication } = usePublication();
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const cameraRef = useRef(null);

    useEffect(() => {
        async function getPermission() {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        }

        getPermission();
    }, []);

    if (hasPermission === null) {
        return (
            <Container>
                <ActivityIndicator />
            </Container>
        );
    }

    if (hasPermission === false) {
        return (
            <NotPermission>
                <NotPermissionText>
                    No tenemos acceso a la cámara!
                </NotPermissionText>
            </NotPermission>
        );
    }

    async function handleTakePhoto() {
        const photo = await cameraRef.current.takePictureAsync();
        updatePublication({ image: photo.uri, type: 'image' });
        navigation.navigate('PublicationScreen', {
            screen: 'DetailScreen',
        });
    }

    async function handleToSelectImage() {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status === 'granted') {
            const photo = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect: [4, 3],
                quality: 1,
            });

            updatePublication({ image: photo.uri, type: photo.type });
            navigation.navigate('PublicationScreen', {
                screen: 'DetailScreen',
            });
        }
    }

    return (
        <Container>
            <CameraView type={type} ref={cameraRef}>
                <ButtonsContainer>
                    <FilesButton onPress={() => handleToSelectImage()}>
                        <ImageIcon size={42} color="#fff" />
                    </FilesButton>
                    <TakePhotoButton onPress={() => handleTakePhoto()}>
                        <CamaraIcon size={42} color="#fff" />
                    </TakePhotoButton>
                    <ChangeCamaraButton
                        onPress={() =>
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back,
                            )
                        }>
                        <RefreshIcon size={42} color="#fff" />
                    </ChangeCamaraButton>
                </ButtonsContainer>
            </CameraView>
        </Container>
    );
};

export default PublicationScreen;
