import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-left: 5px;
    padding-right: 5px;
`;

export const EmptyContainer = styled.View`
    padding-top: 30px;
    padding-bottom: 30px;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #ececec;
`;

export const TextEmpty = styled.Text`
    font-size: 16px;
`;

export const CreateProductButton = styled.TouchableOpacity``

export const CreateProductButtonText = styled.Text`
    font-size: 18px;
    color: #0d6efd;
`;

export const HeaderContainer = styled.View`
    background-color: #fff;
    margin-bottom: 10px;
`;

export const HeaderText = styled.Text`
    font-size: 14px;
    color: #212529;
`;

export const CategoriesContainer = styled.ScrollView`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const CategoryButton = styled.TouchableOpacity`
    margin-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 8px;
    background-color: ${(props) => props.selected ? '#f7c033' : '#ececec'} ;
    border-radius: 10px;
`;

export const CategoryButtonText = styled.Text`
    font-size: 12px;
    font-weight: bold;
`;
