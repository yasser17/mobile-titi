import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import Toast from 'react-native-toast-message';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import {
    Container,
    Map,
    GoogleAutoComplete,
    Button,
    ButtonText,
} from './styles';

import { Marker } from 'react-native-maps';

import bussinesMarker from '../../../assets/markers/bussiness.png';
import { GOOGLEAPIKEY } from '../../../../env.js';
import { useBussiness } from '../../../context/bussiness';
import { ActivityIndicator } from 'react-native';
import api from '../../../service/api';

const LocationStep = ({ navigation }) => {
    const { bussiness, updateBussiness, clear } = useBussiness();

    const [location, setLocation] = useState({
        latitude: -31.3665606,
        longitude: -57.980067,
        latitudeDelta: 0.0443,
        longitudeDelta: 0.0434,
    });
    const [markets, setMarkets] = useState([]);
    const [ready, setReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getLocation() {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') return;
            try {
                let location = await Location.getCurrentPositionAsync();
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134,
                });
            } catch (error) {}
        }
        getLocation();
    }, []);

    function handleGetLocation(data, { geometry }) {
        try {
            const marker = {
                latitude: geometry.location.lat,
                longitude: geometry.location.lng,
            };
            setMarkets([marker]);
            setLocation({
                ...marker,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
            });
            updateBussiness({
                latitude: geometry.location.lat,
                longitude: geometry.location.lng,
                place_id: data.place_id,
                address: `${data.terms[0].value} ${data.terms[1].value}`,
                city: data.terms[2].value,
                country: data.terms[4].value,
            });
            setReady(true);
        } catch (error) {
            console.log(error);
        }
    }

    function handleStore() {
        setIsLoading(true);
        api.post('/bussiness', bussiness)
            .then(({ data }) => {
                Toast.show({
                    text1: 'Empresa registrada!',
                    text2: 'Gracias por registrar su empresa',
                });
                navigation.navigate('CompanyScreen', {
                    screen: 'HomeScreen',
                    params: { companyId: data.id, company: data },
                });
            })
            .catch(({ response }) => console.log(response.data))
            .finally(() => setIsLoading(false));
    }

    return (
        <Container>
            <Map region={location} showsUserLocation={true}>
                {markets.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker}
                        anchor={{ x: 0, y: 0 }}
                        image={bussinesMarker}
                    />
                ))}
            </Map>

            <GooglePlacesAutocomplete
                placeholder="Busque la Dirección"
                fetchDetails
                enableHighAccuracyLocation={true}
                enablePoweredByContainer={false}
                onPress={handleGetLocation}
                onFail={(error) => console.error(error)}
                query={{
                    key: GOOGLEAPIKEY,
                    language: 'es',
                }}
                styles={{
                    container: {
                        position: 'absolute',
                        width: '90%',
                        top: 10,
                        alignSelf: 'center',
                    },
                }}
            />

            {/* <GoogleAutoComplete
                placeholder="Busque su dirección"
                fetchDetails
                enablePoweredByContainer={false}
                onPress={handleGetLocation}
                query={{
                    key: GOOGLEAPIKEY,
                    language: 'es',
                }}
                styles={{
                    container: {
                        position: 'absolute',
                        width: '90%',
                        top: 10,
                        alignSelf: 'center',
                    },
                }}
            /> */}

            <Button disabled={!ready} onPress={() => handleStore()}>
                {isLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <ButtonText>Registrar</ButtonText>
                )}
            </Button>
        </Container>
    );
};

export default LocationStep;
