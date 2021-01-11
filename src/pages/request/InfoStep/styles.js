import styled from 'styled-components/native';
import { MarketIcon } from '../../../assets/icons';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
`;

export const MarketContainer = styled.View`
    flex: 2;
    background-color: #E5E7EB;
    justify-content: center;
    align-content: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const Text = styled.Text`
    font-size: 18px;
    color: #4c4c4c;
    text-align: center;
    margin-top: 10px;
`;

export const Scroll = styled.ScrollView`
    flex: 1;
`;

export const FormContanier = styled.View`
    flex: 6;
    padding-right: 20px;
    padding-left: 20px;
`;

export const Market = styled(MarketIcon)`
    width: 50%;
    align-self: center;
`;
