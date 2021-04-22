import React, { useEffect, useLayoutEffect, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import {
    Wrapper,
    Container,
    Header,
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

const Favorite: React.FC = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    
    useEffect(() => {        
        async function loadFavorites() {      
            const value = await AsyncStorage.getItem('@favorites');
            const obj = JSON.parse(value);
            if (obj.length > 0)
                setAnimes(obj);
            else
                setAnimes([]);
        }

        if (animes.length === 0)
            loadFavorites();
    }, [animes]);

    const navigateToAnimeDetail = useCallback((id) => {
        navigation.navigate('AnimeDetail', { id });
    }, [navigation]);

    return (
        <Wrapper>
            <Header>
                <HeaderText>Favoritos</HeaderText>
            </Header>
            <Container>
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

export default Favorite;