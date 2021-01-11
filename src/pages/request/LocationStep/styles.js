import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Map = styled(MapView)`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;
`;

export const GoogleAutoComplete = styled(GooglePlacesAutocomplete)`
    position: absolute;
    width: 100%;
    top: 50px;
`;
