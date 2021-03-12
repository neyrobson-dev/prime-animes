import React, { useEffect, useCallback, useState } from 'react';
import { StatusBar, FlatList, View, Text } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Movies from '../../components/Movies';

import {
  Container,
  Poster,
  Gradient,
  Episodes,
  EpisodesLabel,
  MoviePoster,
  MovieCard,
  MovieTitle,
} from './styles';

export interface Latest {
  category_id: string;
  title: string;
  category_image: string;
  video_id: string;
}

interface Destaque {
  id?: string;
  description?: string;
  logo?: string;
  background?: string;
  active?: string;
  category_code?: string;
  category_name?: string;
  category_image?: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [latest, setLatest] = useState<Latest[]>([]);
  const [poster, setPoster] = useState({} as Destaque);

  useEffect(() => {
    // api.get('/api-animesbr-10.php?latest').then(response => {
    api.get('/latest').then(response => {
      setLatest(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('/poster').then(response => {
      setPoster(response.data.data[0]);
    });
  }, []);

  const navigateToVideoDetail = useCallback((id) => {
    navigation.navigate('VideoDetail', { id });
  }, [navigation]);

  return (
    <>
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
      <Container>
        <Poster source={{ uri: poster.background }}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,1)'
            ]}>
              <Header />
              <Hero data={poster} />
          </Gradient>
        </Poster>

        <Movies label='Populares' item='/popular' />
        {/* <Movies label='Populares' item='/api-animesbr-10.php?populares' /> */}
        {/* <Movies label='Favoritos' item='/api-animesbr-10.php?populares' /> */}

        <Episodes>
          <EpisodesLabel>Novos Episódios</EpisodesLabel>
          <FlatList
            data={latest}
            keyExtractor={item => item.category_id}
            numColumns={3}
            renderItem={({ item }) => {
              return (
                <MovieCard onPress={() => {navigateToVideoDetail(item.video_id)}}>
                  <MoviePoster resizeMode='cover' source={{ uri: item.category_image}} />
                  <MovieTitle>{ ((item.title).length > 20) ? (((item.title).substring(0, 20-3)) + '...') : item.title }</MovieTitle>
                </MovieCard>
              );
            }}
          />
        </Episodes>

      </Container>
    </>
  )
};

export default Home;
