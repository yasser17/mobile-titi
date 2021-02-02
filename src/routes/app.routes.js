import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, TouchableOpacity, Platform } from 'react-native';

import Home from '../pages/home';
import Map from '../pages/map';
import InfoStep from '../pages/request/InfoStep';
import LocationStep from '../pages/request/LocationStep';
import CompanyScreen from './company.routes';


import { Menu } from '../assets/icons';
import { useAuth } from '../context/auth';

const Stack = createStackNavigator();

const AppRoutes = () => {
    const { toggleModal } = useAuth();
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#052E64',
                },
                headerTitleContainerStyle: {
                    alignSelf: Platform.OS === 'ios' ? 'center' : 'flex-start',
                    alignItems: 'center',
                },
                headerTitle: (
                    <Image
                        source={require('../assets/titi-logo.png')}
                        resizeMode="contain"
                        style={{ width: 150 }}
                    />
                ),
                headerRightContainerStyle: {
                    alignItems: 'center',
                    color: '#fff',
                },
                headerRight: () => (
                    <TouchableOpacity
                        style={{ marginRight: 10 }}
                        onPress={() => toggleModal()}>
                        <Menu />
                    </TouchableOpacity>
                ),
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="BussinesRequest" component={InfoStep} />
            <Stack.Screen name="BussinesRequestLocation" component={LocationStep} />
            <Stack.Screen name="CompanyScreen" component={CompanyScreen} />
        </Stack.Navigator>
    );
};

export default AppRoutes;
