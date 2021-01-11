import React, { useState, useEffect } from 'react';

import { Container, Map, GoogleAutoComplete } from './styles';

import {Marker} from 'react-native-maps';

const LocationStep = () => {
    const [location, setLocation] = useState({
        latitude: -31.3665606,
        longitude: -57.980067,
        latitudeDelta: 0.0443,
        longitudeDelta: 0.0434,
    });
    const [markets, setMarkets] = useState([]);

    useEffect(() => {
        // async function getLocation() {
        //     let { status } = await Location.requestPermissionsAsync();
        //     if (status !== 'granted') return;
        //     try {
        //         let location = await Location.getCurrentPositionAsync();
        //         setLocation({
        //             latitude: location.coords.latitude,
        //             longitude: location.coords.longitude,
        //             latitudeDelta: 0.0143,
        //             longitudeDelta: 0.0134,
        //         });
        //     } catch (error) {}
        // }
        // getLocation();
    }, []);

    function handleGetLocation(data, {geometry}) {
        const marker = {
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
        };
        setMarkets([
            marker
        ])
        setLocation({
            ...marker,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
        })
    }  

    return (
        <Container>
            <Map region={location} showsUserLocation={true} />
            {
                markets.map((marker, index) => (
                    <Marker 
                    key={index}
                    coordinate={marker}
                     />
                ))
            }

            <GoogleAutoComplete
                placeholder="Busque su dirección"
                fetchDetails
                enablePoweredByContainer={false}
                onPress={handleGetLocation}
                query={{
                    key: 'AIzaSyCjBHG-vi7p8gg6S1554Yu83TqmDtckE6o',
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
        </Container>
    );
};

export default LocationStep;
