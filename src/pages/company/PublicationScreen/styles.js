import styled from 'styled-components/native';
import {Camera} from 'expo-camera';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const NotPermission = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const NotPermissionText = styled.Text`
    font-size: 18px;
`;

export const CameraView = styled(Camera)`
    flex: 1;
    height: 100%;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 10px 15px;
    justify-content: space-between;
`;

export const FilesButton = styled.TouchableOpacity``;
export const TakePhotoButton = styled.TouchableOpacity``;
export const ChangeCamaraButton = styled.TouchableOpacity``;