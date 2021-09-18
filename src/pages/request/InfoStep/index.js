import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useErrors } from '../../../context/errors';

import {
    Container,
    FormContanier,
    Market,
    MarketContainer,
    KeyboardAvoidingView,
    Scroll,
    Text,
} from './styles';

import {
    ErrorMessage,
    Input,
    PrimaryButton,
    PrimaryButtonText,
} from '../../../styles';
import { useBussiness } from '../../../context/bussiness';
import api from '../../../service/api';

const request = ({ navigation }) => {
    const { hasError, getError, updateErrors } = useErrors();
    const { updateBussiness, bussiness } = useBussiness();
    const [categoryId, setCategoryId] = useState(0);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            try {
                const { data: cats } = await api.get('/company-categories');
                setCategories(cats);
            } catch ({ response }) {
                console.log(response);
            }
        }

        setCategoryId(bussiness.company_category_id);
        setName(bussiness.name);
        setDetails(bussiness.details);
        setEmail(bussiness.email);
        setPhone(bussiness.phone);

        getCategories();
    }, []);

    function handleToRedirectToMap() {
        if (name === '') {
            updateErrors([
                { field: 'name', message: 'El campo nombre es obligatorio' },
            ]);
            return;
        }

        updateBussiness({
            name,
            company_category_id: categoryId,
            details,
            email,
            phone,
        });
        navigation.navigate('BussinesRequestLocation');
    }

    return (
        <KeyboardAvoidingView
            enabled={Platform.OS === 'ios' ? true : false}
            behavior="padding">
            <Container>
                <Scroll showsHorizontalScrollIndicator={false}>
                    <MarketContainer>
                        <Market />
                    </MarketContainer>
                    <FormContanier>
                        <Text>
                            Bienvenido al alta de empresas, poporcione los datos
                            para que podamos agregar su empresa al listado de
                            TitiPoint
                        </Text>

                        <Picker
                            style={styles.select}
                            selectedValue={categoryId}
                            onValueChange={(itemValue) =>
                                setCategoryId(itemValue)
                            }>
                            {categories.map((category) => (
                                <Picker.Item
                                    key={category.id}
                                    label={category.name}
                                    value={category.id}
                                />
                            ))}
                        </Picker>
                        <ErrorMessage active={hasError('name')}>
                            {getError('company_category_id', 'categoria')}
                        </ErrorMessage>

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

                        <PrimaryButton onPress={() => handleToRedirectToMap()}>
                            <PrimaryButtonText>Siguiente</PrimaryButtonText>
                        </PrimaryButton>
                    </FormContanier>
                </Scroll>
            </Container>
        </KeyboardAvoidingView>
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
        borderStyle: 'solid',
        borderColor: '#3d9be5',
        marginTop: 30,
    },
});

export default request;
