import React, { useEffect } from 'react';
import * as Location from 'expo-location';

import {
    Add,
    CategoriesContainer,
    CategoriesScroll,
    CategoryButton,
    CategoryImage,
    CategoryText,
    Container,
    Map,
    SearchButton,
    SearchContainer,
    SearchInput,
} from './styles';
import { StatusBar } from 'react-native';
import { useState } from 'react';
import { Plus, SearchIcon } from '../../assets/icons';
import api from '../../service/api';
import bussinesMarker from '../../assets/markers/bussiness.png';
import { Marker } from 'react-native-maps';

const map = ({ navigation }) => {
    const [location, setLocation] = useState({
        latitude: -31.3665606,
        longitude: -57.980067,
        latitudeDelta: 0.0443,
        longitudeDelta: 0.0434,
    });

    const [companies, setCompanies] = useState([]);

    async function getNearCompanies(lat, lng) {
        api.get(`/near-companies?lat=${lat}&lng=${lng}`).then(({ data }) => {
            setCompanies(data);
        });
    }

    useEffect(() => {
        async function getLocation() {
            let { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted') return;

            let location = await Location.getCurrentPositionAsync({
                accuracy: 6,
            });
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
            });
            await getNearCompanies(
                location.coords.latitude,
                location.coords.longitude,
            );
        }

        getLocation();
    }, []);

    function onRegionChange() {}

    function navigateToCompany(company) {
        navigation.navigate('CompanyScreen', {
            screen: 'HomeScreen',
            params: { companyId: company.id, company },
        });
    }

    return (
        <Container>
            <StatusBar />

            <Map
                region={location}
                showsUserLocation={true}
                onRegionChange={onRegionChange}>
                {companies.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: parseFloat(marker.latitude),
                            longitude: parseFloat(marker.longitude),
                        }}
                        anchor={{ x: 0, y: 0 }}
                        image={bussinesMarker}
                        onPress={() => navigateToCompany(marker)}
                    />
                ))}
            </Map>
            <SearchContainer>
                <SearchInput />
                <SearchButton onPress={() => {}}>
                    <SearchIcon />
                </SearchButton>
                <CategoriesContainer>
                    <CategoriesScroll
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <CategoryButton>
                            <CategoryImage
                                source={require('../../assets/cat-icons/ropa.png')}
                                resizeMode="contain"
                            />
                            <CategoryText>Tiendas</CategoryText>
                        </CategoryButton>

                        <CategoryButton>
                            <CategoryImage
                                source={require('../../assets/cat-icons/Hotel.png')}
                                resizeMode="contain"
                            />
                            <CategoryText>Hotel</CategoryText>
                        </CategoryButton>

                        <CategoryButton>
                            <CategoryImage
                                source={require('../../assets/cat-icons/cine.png')}
                                resizeMode="contain"
                            />
                            <CategoryText>Cines</CategoryText>
                        </CategoryButton>

                        <CategoryButton>
                            <CategoryImage
                                source={require('../../assets/cat-icons/farmacia.png')}
                                resizeMode="contain"
                            />
                            <CategoryText>Farmacias</CategoryText>
                        </CategoryButton>
                        <CategoryButton>
                            <CategoryImage
                                source={require('../../assets/cat-icons/restaurantes.png')}
                                resizeMode="contain"
                            />
                            <CategoryText>Restaurantes</CategoryText>
                        </CategoryButton>
                        <CategoryButton>
                            <CategoryImage
                                source={require('../../assets/cat-icons/herramientas.png')}
                                resizeMode="contain"
                            />
                            <CategoryText>Talleres</CategoryText>
                        </CategoryButton>
                    </CategoriesScroll>
                </CategoriesContainer>
            </SearchContainer>

            <Add onPress={() => navigation.navigate('BussinesRequest')}>
                <Plus />
            </Add>
        </Container>
    );
};

export default map;
