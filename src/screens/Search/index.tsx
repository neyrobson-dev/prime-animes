import React, { useCallback, useState } from 'react';
import api from '../../services/api';
import { Feather } from '@expo/vector-icons';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Wrapper,
    Container,
    Header,
    InputSearch,
    HeaderText,
    LatestList,
    LatestItem,
    LatestItemTitle,
    LatestItemImage,
} from './styles';

interface Anime {
    id: string,
    category_name: string,
    category_image: string,
}

const Search: React.FC = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();    

    const onChangeText = useCallback(async (value) => {
        if (value.length > 2) {
            setLoading(true);
            await api.get(`/api-animesbr-10.php?search=${value}`).then(response => {
                setAnimes(response.data);
                setLoading(false);
            });
        }
    }, []);

    const navigateToAnimeDetail = useCallback((id) => {
        navigation.navigate('AnimeDetail', { id });
    }, [navigation]);

    function clearData(): void {
        if (searchText != '') {
            setSearchText('');
            setAnimes([]);
        }
    }

    if (loading) {
        return(
            <Wrapper>
                <Container>
                    <Header>
                        <Feather name="search" size={20} color="#e2e2e2" />
                        <InputSearch
                            placeholder="Busque por nome"
                            placeholderTextColor="#e2e2e2"
                            value={searchText}
                            // onChangeText={onChangeText}
                            onChangeText={(value) => {
                                setSearchText(value)
                                onChangeText(searchText)
                            }}
                        />
                        {searchText != '' && (<Feather name="x" size={20} color="#e2e2e2" onPress={() => clearData()}></Feather>)}
                    </Header>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>
                        <ActivityIndicator size="large" color="#e2e2e2" />
                    </View>
                </Container>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Container>
            <Header>
                <Feather name="search" size={20} color="#e2e2e2" />
                <InputSearch
                    placeholder="Busque por nome"
                    placeholderTextColor="#e2e2e2"
                    value={searchText}
                    // onChangeText={onChangeText}
                    onChangeText={(value) => {
                        setSearchText(value)
                        onChangeText(searchText)
                    }}
                />
                {searchText != '' && (<Feather name="x" size={20} color="#e2e2e2" onPress={() => clearData()}></Feather>)}
            </Header>
            <LatestList>
                {animes.map((item) => (
                <LatestItem key={item.id} onPress={() => {navigateToAnimeDetail(item.id)}}>
                    <LatestItemImage source={{ uri: `http://cdn.appanimeplus.tk/img/${item.category_image}`, width: 135, height: 189 }} />
                    <LatestItemTitle>{ ((item.category_name).length > 35) ? (((item.category_name).substring(0, 35-3)) + '...') : item.category_name }</LatestItemTitle>
                </LatestItem>
                ))}
            </LatestList>
            </Container>
        </Wrapper>
    );
}

export default Search;