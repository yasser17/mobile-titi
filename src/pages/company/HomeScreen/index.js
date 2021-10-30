import React, { useEffect, useState } from 'react';
import Publication from '../../../components/Publication';
import * as ImagePicker from 'expo-image-picker';
import path from 'path';
import api from '../../../service/api';

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

const HomeScreen = ({ route, navigation}) => {
    const [isEditing, setIsEditing] = useState(true);
    let {companyId,  company } = route.params

    async function changeImage() {
        if (isEditing) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
            });

            if (!result.cancelled) {
                const form = new FormData();

                form.append('image', {
                    uri: result.uri,
                    type: `image/${result.type}`,
                    name: path.basename(result.uri),
                });
                form.append('mime', `image/${result.uri.split('.').pop()}`);

                api.post(`/company-image-profile/${companyId}`, form)
                    .then(({ data }) => {
                        company = data;
                    })
                    .catch(({ response }) => console.log(response));
            }
        }
    }

    return (
        <Container>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <CoverImage
                    source={require('../../../assets/cover_company.png')}>
                    <ProfileImage onPress={() => changeImage()}>
                        <ProfileImageFile
                            source={{ uri: company.imageUrl}}
                            resizeMode="contain"
                        />
                    </ProfileImage>
                </CoverImage>

                <InfoContainer>
                    <CompanyName>{ company?.name }</CompanyName>
                    <CompanyDescription>
                        {
                            company?.details
                        }
                    </CompanyDescription>
                </InfoContainer>

                <Publication />
            </ScrollView>
        </Container>
    );
};

export default HomeScreen;
