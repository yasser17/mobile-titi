import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ErrorMessage = styled.Text`
    display: ${(props) => (props.active ? 'flex' : 'none')};
    padding-left: 15px;
    margin-bottom: 10px;
    font-size: 12px;
    color: #e23545;
`;

export const PrimaryButton = styled.TouchableOpacity`
    margin-top: 30px;
    background-color: #3d9be5;
    align-self: center;
    padding: 8px 15px;
    border-radius: 16px;
    width: 60%;
`;

export const PrimaryButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
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

export const ActivityIndicator = styled.ActivityIndicator``;
