import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  Header,
  Container,
  Category,
  CategoryText,
  ListContent,
  Item,
  ItemTitle,
  ItemImage,
  LatestList,
  LatestItem,
  LatestItemTitle,
  LatestItemImage,
} from './styles';

export interface Latest {
  category_id: string;
  title: string;
  category_image: string;
  video_id: string;
}

interface Anime {
  id: string,
  category_name: string,
  category_image: string,
}

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [latest, setLatest] = useState<Latest[]>([]);
  const [animes, setAnimes] = useState<Anime[]>([]);

  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    api.get('/api-animesbr-11.php?populares').then(response => {
      setAnimes(response.data);
    });

    api.get('/api-animesbr-11.php?latest').then(response => {
      // console.log(response.data);
      setLatest(response.data);
    });
  }, []);

  const navigateToAnimeDetail = useCallback((id) => {
    navigate('AnimeDetail', { id });
  }, [navigate]);

  const navigateToVideoDetail = useCallback((id) => {
    navigate('VideoDetail', { id });
  }, [navigate]);

  return (
    <Wrapper>
      <Header />
      <Container>
        <Category>
          <CategoryText>Populares</CategoryText>
          <ListContent>
          {animes.map((item) => (
              <Item key={item.id} onPress={() => {navigateToAnimeDetail(item.id)}}>
                  <ItemImage source={{ uri: `http://cdn.appanimeplus.tk/img/${item.category_image}`, width: 135, height: 189 }} />
                  <ItemTitle>{ ((item.category_name).length > 35) ?
                      (((item.category_name).substring(0, 35-3)) + '...') :
                      item.category_name }
                  </ItemTitle>
              </Item>
          ))}
          </ListContent>
        </Category>
        <Category>
          <CategoryText>Últimos Episódios</CategoryText>
          <LatestList>
            {latest.map((item) => (
              <LatestItem key={item.category_id} onPress={() => {navigateToVideoDetail(item.video_id)}}>                    
                <LatestItemImage source={{ uri: `http://cdn.appanimeplus.tk/img/${item.category_image}`, width: 135, height: 189 }} />
                <LatestItemTitle>{ ((item.title).length > 35) ? (((item.title).substring(0, 35-3)) + '...') : item.title }</LatestItemTitle>
              </LatestItem>
            ))}
          </LatestList>
        </Category>     
      </Container>
    </Wrapper>
  );
};

export default Home;
