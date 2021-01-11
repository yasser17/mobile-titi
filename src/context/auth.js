import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState, useEffect } from 'react';

import api from '../service/api';

const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        async function loadStorageData() {
            const storagedToken = await AsyncStorage.getItem('@Titi:token');
            try {
                if (storagedToken) {
                    api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

                    const { data: serverUser } = await api.get('/me');
                    setUser(serverUser);
                }

                setAuthLoading(false);
            } catch (error) {
                console.log(error);
            }

            setAuthLoading(false);
        }

        loadStorageData();
    }, []);

    function toggleModal() {
        setIsModalVisible(!isModalVisible);
    }

    async function signIn(userData) {
        try {
            const { data: response } = await api.post('/login', userData);

            console.log(response.user);

            setUser(response.user);

            await AsyncStorage.setItem(
                '@Lookae:user',
                JSON.stringify(response.user),
            );

            api.defaults.headers.Authorization = `Bearer ${response.token}`;

            await AsyncStorage.setItem('@Titi:token', response.token);
        } catch (err) {
            return err.response.data;
        }
    }

    async function updateUserData() {
        try {
            const { data: userData } = await api.get('/me');

            setUser(userData);
        } catch (err) {}
    }

    async function signInSocialMedia(userData) {
        setUser(userData.user);

        await AsyncStorage.setItem('@Titi:user', JSON.stringify(userData.user));

        api.defaults.headers.Authorization = `Bearer ${userData.token.token}`;

        await AsyncStorage.setItem('@Titi:token', userData.token.token);
    }

    async function signOut() {
        await AsyncStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                authLoading,
                signIn,
                signOut,
                signInSocialMedia,
                updateUserData,
                isModalVisible,
                toggleModal
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
