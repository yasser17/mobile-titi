import React, { useEffect } from 'react';
import * as Location from 'expo-location';

import { Add, Container, Map } from './styles';
import { StatusBar } from 'react-native';
import { useState } from 'react';

const map = () => {
    const [location, setLocation] = useState({
        latitude: -31.3665606,
        longitude: -57.980067,
        latitudeDelta: 0.0443,
        longitudeDelta: 0.0434,
    })

    useEffect(() => {
        async function getLocation() {
            let {status} = await Location.requestPermissionsAsync();
            
            if(status !== 'granted') return;

            let location = await Location.getCurrentPositionAsync();
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
            })
        }

        getLocation();
    }, [])

    function onRegionChange() {

    }

    return (
        <Container>
            <StatusBar />

            <Add />
            <Map region={location} showUserLocation onRegionChange={onRegionChange} />
        </Container>
    );
};

export default map;
