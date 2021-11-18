import styled from 'styled-components/native';
import {Dimensions} from 'react-native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
`;

export const ScrollView = styled.ScrollView`
    padding-top: 15px;
`;

export const Image = styled.Image`
    margin-top: 10px;
    width: ${Dimensions.get('screen').width -40}px;
    height: 400px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 10px;
`;