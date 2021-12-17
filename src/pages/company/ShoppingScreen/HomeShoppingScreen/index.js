import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { useBussiness } from '../../../../context/bussiness';
import { useAuth } from '../../../../context/auth';

import {
    Container,
    EmptyContainer,
    TextEmpty,
    HeaderContainer,
    HeaderText,
    CategoriesContainer,
    CategoryButton,
    CategoryButtonText,
    CreateProductButton,
    CreateProductButtonText,
} from './styles';

const ShoppingScreen = () => {
    const { bussiness } = useBussiness();
    const { user } = useAuth();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(-1);

    useEffect(() => {
        setCategories(CATEGORIES_DUMMY);
    }, []);

    return (
        <Container>
            <FlatList
                data={products}
                ListHeaderComponent={
                    <HeaderContainer>
                        <CategoriesContainer
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {categories.map((category) => (
                                <CategoryButton
                                    key={category.id}
                                    selected={
                                        selectedCategoryId === category.id
                                    }>
                                    <CategoryButtonText>
                                        {category.name}
                                    </CategoryButtonText>
                                </CategoryButton>
                            ))}
                        </CategoriesContainer>
                    </HeaderContainer>
                }
                ListEmptyComponent={
                    <EmptyContainer>
                        <TextEmpty>No existen productos</TextEmpty>

                        {user.id === bussiness.id && (
                            <CreateProductButton>
                                <CreateProductButtonText onPress={() => navigation.navigate('')}>
                                    Crear
                                </CreateProductButtonText>
                            </CreateProductButton>
                        )}
                    </EmptyContainer>
                }
            />
        </Container>
    );
};

export default ShoppingScreen;

const CATEGORIES_DUMMY = [
    {
        id: -1,
        name: 'Todas',
    },
    {
        id: 1,
        name: 'Categoria1',
    },
    {
        id: 2,
        name: 'Categoria2',
    },
    {
        id: 3,
        name: 'Categoria3',
    },
    {
        id: 4,
        name: 'Categoria4',
    },
    {
        id: 5,
        name: 'Categoria5',
    },
];
