import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Map = styled(MapView)`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;
`;