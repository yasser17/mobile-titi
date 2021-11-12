import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../pages/company/HomeScreen';
import MessagesScreen from '../pages/company/MessagesScreen';
import ShoppingScreen from '../pages/company/ShoppingScreen';
import CamaraScreen from '../pages/company/PublicationScreen/CamaraScreen';
import DetailScreen from '../pages/company/PublicationScreen/DetailsScreen';
import SettingsScreen from '../pages/company/SettingsScreen';
import ChatScreen from '../pages/company/ChatScreen';

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
    )
}

const Tab = createBottomTabNavigator();

const CompanyRoutes = () => {
    return (
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
                            return <MessageIcon size={size} color={color} />;
                        case 'ShoppingScreen':
                            return <BagIcon size={size} color={color} />;
                        case 'SettingsScreen':
                            return <SettingsIcon size={size} color={color} />;
                        case 'PublicationScreen':
                            return <PlusIcon size={size} color={color} />;
                        default:
                            return <HomeIcon size={24} />;
                    }
                },
            })}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="ShoppingScreen" component={ShoppingScreen} />
            <Tab.Screen
                name="PublicationScreen"
                component={PublicationRoutes}
            />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
            <Tab.Screen name="MessageScreen" component={MessagesRoutes} />
        </Tab.Navigator>
    );
};

export default CompanyRoutes;
