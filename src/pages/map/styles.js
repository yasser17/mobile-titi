import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Add = styled.TouchableOpacity`
    position: absolute;
    bottom: 50px;
    right: 10px;
    width: 50px;
    height: 50px;
    background-color: #FFF;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const Map = styled(MapView)`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;
`;