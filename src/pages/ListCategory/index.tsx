import React, { useEffect, useCallback, useLayoutEffect, useState, useRef } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import {
  Wrapper,
  Container,
  LatestList,
  LatestItem,
  LatestItemTitle,
  LatestItemImage,
} from './styles';

interface RouteParams {
    name: string;
    slug: string;
}

interface Anime {
    id: string,
    category_name: string,
    category_image: string,
}

const ListCategory: React.FC = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const route = useRoute();
    const routeParams = route.params as RouteParams;
    const navigation = useNavigation();

    useEffect(() => {
      setLoading(true);
      async function loadDetail(): Promise<void> {
        await api.get('/meuanimetv-40.php', {
        params: {
          categoria: routeParams.slug
        }
        }).then(response => {
          setAnimes(response.data);
          setLoading(false);
        });
      }

      loadDetail();
    }, [routeParams]);

    useLayoutEffect(() => {
      navigation.setOptions({
        title: `Categoria: ${(routeParams.name ? routeParams.name : "")}`
      })
    }, [navigation, routeParams]);

    const navigateToAnimeDetail = useCallback((id) => {
      navigation.navigate('AnimeDetail', { id });
    }, [navigation]);

    // const search = useCallback((text) => {
    //   animes.filter(function (item) {
    //     return item.category_name == text
    //   });
    // }, []);
    
    if (loading) {
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>
          <ActivityIndicator size="large" color="#e2e2e2" />
        </View>
      );
    }

    return (
        <Wrapper>
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

export default ListCategory;