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
    width: 100%;
    margin-top: 20px;
    padding: 10px 10px;
    text-align: center;
    background-color: #f7c033;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    elevation: 5;
    margin-bottom: 15px;
`;

export const PrimaryButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-align: center;
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
