import React, { useEffect, useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

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
  const [favorites, setFavorites] = useState<Detail[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
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

  useEffect(() => {
    async function loadFavorites() {
  //     // await AsyncStorage.removeItem('@favorites');
      const value = await AsyncStorage.getItem('@favorites');
      setFavorites(JSON.parse(value));
      console.log(value);
    }

    loadFavorites();
  }, []);

  useEffect(() => {
    async function saveFavorites() {      
      await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
    }

    saveFavorites();
  }, [favorites]);

  const toggleFavorite = useCallback(async (animeId) => {
    if (isFavorite) {
      setFavorites(favorites.filter(item => item.id !== animeId))
    } else {
      setFavorites(favorites => [...favorites, detail]);
    }
    setIsFavorite(!isFavorite);
  }, [isFavorite, detail]);

  const favoriteIconName = useMemo(() => (isFavorite ? 'star' : 'star-o'), [isFavorite],);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: detail.category_name ? detail.category_name : "",
      headerRight: () => (
        <TouchableOpacity onPress={() => toggleFavorite(detail.id)}>
          <FontAwesome name={favoriteIconName} size={24} color="gold"/>
        </TouchableOpacity>
      ),
    })
  }, [navigation, detail, favoriteIconName])  

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
