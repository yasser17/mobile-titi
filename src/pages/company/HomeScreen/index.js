import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
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
    CoverImageFile,
} from './styles';
import { usePublication } from '../../../context/publication';

const HomeScreen = ({ route, navigation }) => {
    const [isEditing, setIsEditing] = useState(true);
    const [comp, setComp] = useState({});
    const [feed, setFeed] = useState([]);
    const { updatePublication } = usePublication();

    let { companyId, company } = route.params;

    useEffect(() => {
        setComp(company);
        updatePublication({ company_id: company.id });
    }, [company]);

    useEffect(() => {
        api.get(`/publications/${company.id}`).then(({ data }) =>
            setFeed(data.data),
        );
    }, []);

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
                        setComp(data);
                    })
                    .catch(({ response }) => console.log(response));
            }
        }
    }

    async function changeCover() {
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

                api.post(`/company-image-cover/${companyId}`, form)
                    .then(({ data }) => {
                        setComp(data);
                    })
                    .catch(({ response }) => console.log(response));
            }
        }
    }

    return (
        <Container>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <CoverImage onPress={() => changeCover()}>
                    <CoverImageFile
                        source={
                            comp.coverUrl
                                ? { uri: comp.coverUrl }
                                : require('../../../assets/cover_company.png')
                        }>
                        <ProfileImage onPress={() => changeImage()}>
                            <ProfileImageFile
                                source={
                                    comp.image
                                        ? { uri: comp.imageUrl }
                                        : require('../../../assets/profile-picture.png')
                                }
                                resizeMode="contain"
                            />
                        </ProfileImage>
                    </CoverImageFile>
                </CoverImage>

                <InfoContainer>
                    <CompanyName>{comp?.name}</CompanyName>
                    <CompanyDescription>{comp?.details}</CompanyDescription>
                </InfoContainer>

                <FlatList
                    data={feed}
                    keyExtractor={(post) => String(post.id)}
                    renderItem={({ item }) => (
                        <Publication item={item} company={comp} />
                    )}
                />
            </ScrollView>
        </Container>
    );
};

export default HomeScreen;
