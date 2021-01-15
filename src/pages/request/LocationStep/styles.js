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

export const Button = styled.TouchableOpacity`
    width: 90%;
    padding: 10px 10px;
    text-align: center;
    background-color: #f7c033;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    elevation: 5;
    margin-bottom: 15px;
    bottom: 60px;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-align: center;
`;
