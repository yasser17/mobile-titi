import styled from 'styled-components/native';

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
    width: 45%;
    height: 120px;
    border-radius: 15px;
    background-color: red;
    overflow: hidden;

`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
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
