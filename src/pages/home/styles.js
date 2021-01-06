import styled from 'styled-components/native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
`;

export const ScrollHorizontal = styled.View`
    flex: 1;
`;

export const Row = styled.View`
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
    justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 120px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    elevation: 5;
`;

export const TextContainer = styled.View`
    width: 60%;
    padding-top: 20px;
    padding-left: 10px;
`;

export const ImageContainer = styled.View`
    width: 40%;
    align-self: flex-end;
`;

export const ButtonTitle = styled.Text`
    font-size: 24px;
    color: #fff;
    font-weight: bold;
`;

export const ButtonText = styled.Text`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
`;

export const ButtonImage = styled.Image`
    width: 100%;
`;

export const ImageBackground = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text`
    font-size: 16px;
`;
