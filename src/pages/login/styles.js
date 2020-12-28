import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
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
    width: 90%;
`;

export const ScrollForm = styled.ScrollView`
    flex: 1;
`;

export const Logo = styled.Image`
    width: 50%;
`;

export const TitiLogo = styled.Image`
    width: 50%;
`;

export const Label = styled.Text`
    font-size: 16px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#3d9be5',
})`
    width: 100%;
    font-size: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 20px;
    padding-left: 20px;
    border: 1px solid #3d9be5;
    margin-top: 30px;
`;

export const ForgotLink = styled.TouchableOpacity``;

export const ForgotLabel = styled.Text`
    margin-top: 40px;
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    color: #9d9d9d;
`;
