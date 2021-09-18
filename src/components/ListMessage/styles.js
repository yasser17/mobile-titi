import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 95%;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom-width: 2px;
    border-bottom-color: #edeeef;
    align-self: center;
`;

export const ImageContainer = styled.View``;

export const MessageContainer = styled.View`
    padding-left: 10px;
    flex-grow: 1;
`;

export const UserImage = styled.Image``;

export const TimeContainer = styled.View`
    align-items: flex-end;
`;

export const UserName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #073c68;
`;

export const MessageExcerpt = styled.Text`
    font-size: 14px;
    color: #434647;
`;
