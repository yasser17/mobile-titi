import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Add = styled.TouchableOpacity`
    position: absolute;
    bottom: 50px;
    right: 10px;
    width: 50px;
    height: 50px;
    background-color: #FFF;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const Map = styled(MapView)`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;
`;

export const SearchContainer = styled.View`
    position: absolute;
    top: 0;
    width: 100%;
    padding: 5px 10px;
`;

export const SearchInput = styled.TextInput`
    font-size: 16;
    border: 1px solid #b2b8bb;
    border-radius: 5px;
    padding: 10px 15px;
    position: relative;
    background-color: #fff;
`;

export const SearchButton = styled.TouchableOpacity`
    position: absolute;
    top: 13px;
    right: 15px;
`;

export const CategoriesContainer = styled.View`
    margin-top: 5px;
    height: 40px;
`;

export const CategoriesScroll = styled.ScrollView``;

export const CategoryButton = styled.TouchableOpacity`
    padding: 5px 5px;
    border: 1px solid #b2b8bb;
    margin-right: 15px;
    border-radius: 5px;
    flex-direction: row;
    width: 140px;
    align-items: center;
    background-color: #fff;
`;

export const CategoryImage = styled.Image`
    width: 20px;
    height: 20px;
`;

export const CategoryText = styled.Text`
    margin-left: 8px;
    font-size: 16px;
`;