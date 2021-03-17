import React, { useEffect, useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { TouchableOpacity, FlatList, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';

import {
  Wrapper,
  Container,
  Info,
  InfoImage,
  Gradient,
  InfoTitle,
  Description,
  Genres,
  GenresText,
  Year,
  Episodes,
  EpisodesTitle,
  EpisodeItem,
  EpisodeItemText,
  Header,
  Action,
  ActionText
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

interface EpisodesList {
  video_id: string,
  category_id: string,
  title: string,
}

const AnimeDetail: React.FC = () => {
  const [detail, setDetail] = useState({} as Detail);
  const [episodes, setEpisodes] = useState<EpisodesList[]>([]);
  const [favorites, setFavorites] = useState<Detail[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [statusBarColor, setStatusBarColor] = useState('transparent');
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const navigation = useNavigation();

  useEffect(() => {
    async function loadDetail(): Promise<void> {
      // await api.get('/api-animesbr-10.php', {
      //   params: {
      //     info: routeParams.id
      //   }
      // }).then(response => {
      //   setDetail(response.data[0]);
      // });
      await api.get(`/anime-info/${routeParams.id}`).then(response => {
        setDetail(response.data.info);
        setEpisodes(response.data.episodes);
      });
    }

    loadDetail();
  }, [routeParams]);

  // useEffect(() => {
  //   async function loadEpisodes(): Promise<void> {
  //     await api.get('/api-animesbr-10.php', {
  //       params: {
  //         cat_id: routeParams.id
  //       }
  //     }).then(response => {
  //       setEpisodes(response.data);
  //     });
  //   }

  //   loadEpisodes();
  // }, [routeParams]);

  // useEffect(() => {
  //   async function loadFavorites() {
  // //     // await AsyncStorage.removeItem('@favorites');
  //     const value = await AsyncStorage.getItem('@favorites');
  //     const obj = JSON.parse(value);
  //     if (obj.length > 0)
  //       setFavorites(obj);
  //     else
  //       setFavorites([]);
  //   }
  //   loadFavorites();

  //   favorites.filter(item => item.id === detail.id);
  //   console.log(favorites);
  //   // if (favorites.length > 0)
  //   //   setIsFavorite(true);

  // }, []);

  // useEffect(() => {
  //   async function saveFavorites() {      
  //     await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
  //   }

  //   saveFavorites();
  // }, [favorites]);

  // const toggleFavorite = useCallback(async (animeId) => {
  //   if (isFavorite) {
  //     setFavorites(favorites.filter(item => item.id !== animeId))
  //   } else {
  //     setFavorites(favorites => [...favorites, detail]);
  //   }
  //   setIsFavorite(!isFavorite);
  // }, [isFavorite, detail]);

  // const favoriteIconName = useMemo(() => (isFavorite ? 'star' : 'star-o'), [isFavorite],);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: detail.category_name ? detail.category_name : "",
  //     headerRight: () => (
  //       <TouchableOpacity onPress={() => toggleFavorite(detail.id)}>
  //         <FontAwesome name={favoriteIconName} size={24} color="gold"/>
  //       </TouchableOpacity>
  //     ),
  //   })
  // }, [navigation, detail, favoriteIconName])  

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

  const captureScroll = useCallback((event: Object) => {
    if (event.nativeEvent.contentOffset.y > 300) {
      setStatusBarColor('#000000');
    } else if (event.nativeEvent.contentOffset.y <= 300) {
      setStatusBarColor('transparent');
    }
  }, []);

  const renderRow = ({item}) => {
    return (
      <EpisodeItem onPress={() => {navigateToVideoDetail(item.video_id)}}>
        <EpisodeItemText>{item.title}</EpisodeItemText>
      </EpisodeItem>
    );
  };

  return (
    <>
    <StatusBar style="light" backgroundColor={statusBarColor} />
    <Container
      onScroll={event => {captureScroll(event)} }
      scrollEventThrottle={160}
    > 
      {/* <InfoImage source={{ uri: `http://cdn.appanimeplus.tk/img/${detail.category_image}` }} /> */}
      <InfoImage source={{ uri: detail.category_image }}>
        <Gradient
          locations={[0, 0.2, 0.6, 0.93]}
          colors={[
            'rgba(0,0,0,0.5)',
            'rgba(0,0,0,0.0)',
            'rgba(0,0,0,0.0)',
            'rgba(0,0,0,1)'
          ]}>
            <Header>
              <Action onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#e2e2e2"/>
              </Action>
              {/* <Action>
                <Feather name="star" size={24} color="#e2e2e2"/>
              </Action> */}
            </Header>
            <Info>
              <InfoTitle>{detail.category_name}</InfoTitle>
            </Info>
        </Gradient>
      </InfoImage>
      <View style={{ marginHorizontal: 16 }}>
        <Description style={{ color: '#FFFFFF'}}>{detail.category_description}</Description>
        <Year>{detail.ano}</Year>
        <Genres>
        {splitText(detail.category_genres).map((item) => (
          <GenresText>{item}</GenresText>
        ))}
        </Genres>
      </View>
      <Episodes>
        <EpisodesTitle>Episódios</EpisodesTitle>
        <FlatList
          data={episodes}
          renderItem={renderRow}
        />
      </Episodes>
    </Container>
    </>
  );
};

export default AnimeDetail;
