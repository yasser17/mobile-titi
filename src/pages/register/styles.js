import styled from 'styled-components/native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const ScrollView = styled.ScrollView`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
`;

export const Background = styled.ImageBackground`
    flex: 1;
    width: 100%;
    justify-content: center;
`;


export const LogoContainer = styled.View`
    justify-content: center;
    width: 100%;
`;

export const FormContainer = styled.View`
    width: 90%;
    height: 80%;
    align-self: center;
    background-color: #fff;
    position: relative;
    padding-top: 150px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Logo = styled.Image`
    width: 50%;
    align-self: center;
    position: absolute;
    top: -50px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#8f8f8f',
})`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    background-color: #f2f2f2;
    font-size: 16px;
    margin-top: 30px;
`;
