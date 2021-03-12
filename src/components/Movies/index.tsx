import  React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Label,
    MovieScroll,
    MovieCard,
    MoviePoster
} from './styles';

interface Anime {
  id: string,
  category_name: string,
  category_image: string,
}

const Movies: React.FC = ({ label, item }) => { 
  const navigation = useNavigation();

  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    api.get(item).then(response => {
      setAnimes(response.data);
    });
  }, []);

  const navigateToAnimeDetail = useCallback((id) => {
    navigation.navigate('AnimeDetail', { id });
  }, [navigation]);

  return (
    <Container>
      <Label>{label}</Label>
        <MovieScroll horizontal>
        {animes.map((item) => {
          return (
            <MovieCard key={item.id} onPress={() => {navigateToAnimeDetail(item.id)}}>
              <MoviePoster resizeMode='cover' source={{ uri: `http://cdn.appanimeplus.tk/img/${item.category_image}`}} />
            </MovieCard>
          )
        })}
        </MovieScroll>
    </Container>
  );
}

export default Movies;