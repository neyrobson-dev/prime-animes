import React, { useEffect, useCallback, useLayoutEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import {
  Wrapper,
  Container,
  Info,
  InfoImage,
  InfoTitle,
  Description,
  Genres,
  GenresText,
  Year,
  Episodes,
  EpisodesTitle,
  EpisodeItem,
  EpisodeItemText
} from './styles';

interface RouteParams {
  id: string;
}

interface Detail {
  id: string,
  category_name: string,
  category_image: string,
  category_description: string,
  category_genres: string,
  ano: string,
  count: string,
  off: string,
}

interface Episodes {
  video_id: string,
  category_id: string,
  title: string,
}

const AnimeDetail: React.FC = () => {
  const [detail, setDetail] = useState({} as Detail);
  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const navigation = useNavigation();

  useEffect(() => {
    async function loadDetail(): Promise<void> {
      await api.get('/api-animesbr-10.php', {
        params: {
          info: routeParams.id
        }
      }).then(response => {
        setDetail(response.data[0]);
      });
    }

    loadDetail();
  }, [routeParams]);

  useEffect(() => {
    async function loadEpisodes(): Promise<void> {
      await api.get('/api-animesbr-10.php', {
        params: {
          cat_id: routeParams.id
        }
      }).then(response => {
        setEpisodes(response.data);
      });
    }

    loadEpisodes();
  }, [routeParams]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: detail.category_name ? detail.category_name : ""
    })
  }, [navigation, detail])

  const navigateToVideoDetail = useCallback((id) => {
    navigation.navigate('VideoDetail', { id });
  }, [navigation]);

  function splitText(text: string) {
    if (text) {
      var splitted = text.split(", "); 
      return splitted;
    }
    return [];
  }

  const renderRow = ({item}) => {
    return (
      <EpisodeItem onPress={() => {navigateToVideoDetail(item.video_id)}}>
        <EpisodeItemText>{item.title}</EpisodeItemText>
      </EpisodeItem>
    );
  };

  return (
    <Wrapper>
      <Container>
        <Info>
          <InfoImage source={{ uri: `http://cdn.appanimeplus.tk/img/${detail.category_image}` }} />
          {/* <InfoTitle>{detail.category_name}</InfoTitle> */}
        </Info>
        <Description style={{ color: '#FFFFFF'}}>{detail.category_description}</Description>
        <Year>{detail.ano}</Year>
        <Genres>
        {splitText(detail.category_genres).map((item) => (
          <GenresText>{item}</GenresText>
        ))}
        </Genres>
        <Episodes>
          <EpisodesTitle>Episódios</EpisodesTitle>
          <FlatList
            data={episodes}
            renderItem={renderRow}
          />
        </Episodes>
      </Container>
    </Wrapper>
  );
};

export default AnimeDetail;
