import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Background = styled.ImageBackground`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const LogoContainer = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const FormContainer = styled.View`
    flex: 3;
    width: 100%;
    align-items: stretch;
`;

export const Form = styled.View`
    width: 90%;
    background-color: #48b6fb;
    border: 3px solid #fff;
    border-radius: 30px;
    padding: 10px 15px;
    align-self: center;
`;

export const RegisterForm = styled.View`
    margin-top: 10px;
    width: 90%;
    background-color: #fff;
    border: 3px solid #48b6fb;
    border-radius: 30px;
    padding: 10px 15px;
    align-self: center;
`;

export const RegisterText = styled.Text`
    font-size: 18px;
    text-align: center;
`;

export const ScrollForm = styled.ScrollView`
    flex: 1;
`;

export const Logo = styled.Image`
    width: 50%;
`;

export const Titi = styled.Image`
    width: 90%;
    align-self: center;
`;

export const TitiLogo = styled.Image`
    width: 50%;
`;

export const Label = styled.Text`
    font-size: 16px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#919191',
})`
    width: 100%;
    font-size: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 20px;
    padding-left: 20px;
    background-color: #fff;
    margin-top: 30px;
    border-radius: 10px;
`;

export const ForgotLink = styled.TouchableOpacity`
    margin-top: 15px;
`;

export const RegisterLink = styled.TouchableOpacity``;

export const ForgotLabel = styled.Text`
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const RegisterLabel = styled.Text`
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    color: #3a97e1;
`;

export const LoginButton = styled.TouchableOpacity`
    width: 100%;
    margin-top: 20px;
    padding: 10px 10px;
    text-align: center;
    background-color: #f7c033;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    elevation: 5;
`;

export const LoginButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-align: center;
`;
