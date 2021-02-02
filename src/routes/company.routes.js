import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import HomeScreen from '../pages/company/HomeScreen';
import MessagesScreen from '../pages/company/MessagesScreen';

import {HomeIcon, MessageIcon} from '../assets/icons'

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
                            return <HomeIcon size={size} color={color}/>;
                        case 'MessageScreen':
                            return <MessageIcon size={size} color={color} />;
                        default:
                            return <HomeIcon size={24} />;
                    }
                },
            })}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="MessageScreen" component={MessagesScreen} />
        </Tab.Navigator>
    );
};

export default CompanyRoutes;
