import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../pages/company/HomeScreen';
import MessagesScreen from '../pages/company/MessagesScreen';
import ShoppingScreen from '../pages/company/ShoppingScreen/HomeShoppingScreen';
import CamaraScreen from '../pages/company/PublicationScreen/CamaraScreen';
import DetailScreen from '../pages/company/PublicationScreen/DetailsScreen';
import SettingsScreen from '../pages/company/ShoppingScreen/HomeShoppingScreen';
import ChatScreen from '../pages/company/ChatScreen';
import { PublicationProvider } from '../context/publication';

import {
    HomeIcon,
    MessageIcon,
    SettingsIcon,
    BagIcon,
    PlusIcon,
} from '../assets/icons';

const Stack = createStackNavigator();

const MessagesRoutes = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="MessagesStack" component={MessagesScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
    );
};

const StackP = createStackNavigator();

const PublicationRoutes = () => {
    return (
        <StackP.Navigator headerMode="none">
            <StackP.Screen name="CamaraScreen" component={CamaraScreen} />
            <StackP.Screen name="DetailScreen" component={DetailScreen} />
        </StackP.Navigator>
    );
};


const StackS = createStackNavigator();

const ShoppingRoutes = () => {
    return (
        <StackS.Navigator headerMode="none">
            <StackS.Screen name="ShoppingHome" component={ShoppingScreen} />
        </StackS.Navigator>
    );
};

const Tab = createBottomTabNavigator();

const CompanyRoutes = () => {
    return (
        <PublicationProvider>
            <Tab.Navigator
                initialRouteName="HomeScreen"
                tabBarOptions={{
                    showLabel: false,
                    keyboardHidesTabBar: true,
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        switch (route.name) {
                            case 'HomeScreen':
                                return <HomeIcon size={size} color={color} />;
                            case 'MessageScreen':
                                return (
                                    <MessageIcon size={size} color={color} />
                                );
                            case 'ShoppingScreen':
                                return <BagIcon size={size} color={color} />;
                            case 'SettingsScreen':
                                return (
                                    <SettingsIcon size={size} color={color} />
                                );
                            case 'PublicationScreen':
                                return <PlusIcon size={size} color={color} />;
                            default:
                                return <HomeIcon size={24} />;
                        }
                    },
                })}>
                <Tab.Screen name="HomeScreen" component={HomeScreen} />
                <Tab.Screen name="ShoppingScreen" component={ShoppingRoutes} />
                <Tab.Screen
                    name="PublicationScreen"
                    component={PublicationRoutes}
                />
                <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
                <Tab.Screen name="MessageScreen" component={MessagesRoutes} />
            </Tab.Navigator>
        </PublicationProvider>
    );
};

export default CompanyRoutes;
