import React from 'react';
import Publication from '../../../components/Publication';

import {
    Container,
    ScrollView,
    CoverImage,
    ProfileImage,
    ProfileImageFile,
    CompanyName,
    InfoContainer,
    CompanyDescription,
} from './styles';

const HomeScreen = () => {
    return (
        <Container>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <CoverImage
                    source={require('../../../assets/cover_company.png')}>
                    <ProfileImage onPress={() => console.log('entro')}>
                        <ProfileImageFile
                            source={require('../../../assets/profile-picture.png')}
                            resizeMode="contain"
                        />
                    </ProfileImage>
                </CoverImage>

                <InfoContainer>
                    <CompanyName>Nombre Empresa</CompanyName>
                    <CompanyDescription>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </CompanyDescription>
                </InfoContainer>

                <Publication />
            </ScrollView>
        </Container>
    );
};

export default HomeScreen;
