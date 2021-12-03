import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-picker/picker';

import {
    ActivityIndicator,
    ErrorMessage,
    Input,
    Label,
    PrimaryButton,
    PrimaryButtonText,
} from '../../../styles';
import { useErrors } from '../../../context/errors';
import { useBussiness } from '../../../context/bussiness';

import { Container, Titulo } from './styles';
import api from '../../../service/api';
import Toast from 'react-native-toast-message';

const SettingsScreen = () => {
    const { hasError, getError, updateErrors } = useErrors();
    const { bussiness, updateBussiness } = useBussiness();

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [currencies, setCurrencies] = useState([]);
    const [currencyId, setCurrencyId] = useState(null);

    useEffect(() => {
        function loadCurrencies() {
            api.get('/currencies').then(({ data }) => setCurrencies(data));
        }

        setName(bussiness.name);
        setDetails(bussiness.details);
        setEmail(bussiness.email);
        setPhone(bussiness.phone);
        setCurrencyId(bussiness.currency_id);

        loadCurrencies();
    }, []);

    function storeData() {
        setIsLoading(true);
        updateBussiness({
            name,
            details,
            email,
            phone,
            currency_id: currencyId,
        });
        api.patch(`/bussiness/${bussiness.id}`)
            .then(() => {
                Toast.show({
                    text1: 'Datos guardados!',
                    text2: 'Los datos de tu empresa fueron modificados',
                });
            })
            // .catch(({ response }) => console.log(response))
            .finally(() => setIsLoading(false));
    }

    return (
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            extraHeight={30}
            enableOnAndroid>
            <Container>
                <Titulo>Datos de la Empresa</Titulo>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <Input
                    value={name}
                    onChangeText={setName}
                    placeholder="Nombre del Negocio"
                />
                <ErrorMessage active={hasError('name')}>
                    {getError('name', 'nombre')}
                </ErrorMessage>

                <Input
                    value={details}
                    onChangeText={setDetails}
                    placeholder="Escriba una descipción corta de sus negocio..."
                    multiline={true}
                    numberOfLines={5}
                />
                <ErrorMessage active={hasError('name')}>
                    {getError('details', 'descripción')}
                </ErrorMessage>

                <Input
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
                <ErrorMessage active={hasError('email')}>
                    {getError('email', 'email')}
                </ErrorMessage>

                <Input
                    placeholder="Teléfono"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />
                <ErrorMessage active={hasError('phone')}>
                    {getError('phone', 'teléfono')}
                </ErrorMessage>

                <Label>Seleccione Moneda de la Tienda</Label>
                <Picker
                    style={styles.select}
                    selectedValue={currencyId}
                    onValueChange={(itemValue) => setCurrencyId(itemValue)}>
                    {currencies.map((currency) => (
                        <Picker.Item
                            key={currency.id}
                            label={`${currency.name} (${currency.code})`}
                            value={currency.id}
                        />
                    ))}
                </Picker>

                <PrimaryButton onPress={() => storeData()}>
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <PrimaryButtonText>Guardar</PrimaryButtonText>
                    )}
                </PrimaryButton>
            </Container>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    select: {
        fontSize: 16,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 20,
        paddingLeft: 20,
        borderWidth: 1,
        // borderStyle: 'solid',
        borderColor: '#3d9be5',
    },
});

export default SettingsScreen;
