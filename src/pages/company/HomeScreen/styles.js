import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
`;

export const CoverImage= styled.TouchableWithoutFeedback`
    width: 100%;
    height: 180px;
    position: relative;
`;


export const CoverImageFile = styled.ImageBackground`
    width: 100%;
    height: 180px;
`;

export const ProfileImage = styled.TouchableOpacity`
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: -75px;
    left: 10px;
`;

export const ProfileImageFile = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 180px;  
`

export const CompanyName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #0C1761;
`;

export const InfoContainer = styled.View`
    width: 100%;
    min-height: 80px;
    padding-left: 180px;
    padding-right: 5px;
`;

export const CompanyDescription = styled.Text`
    font-size: 14px;
    color: #0C1761;
`;