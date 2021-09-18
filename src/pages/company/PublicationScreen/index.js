import React, { useEffect, useState } from 'react';
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
import { CamaraIcon, ImageIcon, RefreshIcon } from '../../../assets/icons';

const PublicationScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

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
        const photo = await this.camera.takePictureAsync();
        console.log(photo);
    }

    async function handleToSelectImage() {
        const {
            status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status === 'granted') {
            const photo = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
        }
    }

    return (
        <Container>
            <CameraView
                type={type}
                ref={(ref) => {
                    this.camera = ref;
                }}>
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
