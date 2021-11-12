import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const PublicationContainer = styled.View`
    width: 100%;
`;

export const Header = styled.View`
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserImage = styled.Image`
    width: 50px;
    height: 50px;
    margin-left: 10px;
`;

export const MoreButton = styled.TouchableOpacity``;

export const ImageContainer = styled.Image`
    width: ${Dimensions.get('screen').width}px;
`;
