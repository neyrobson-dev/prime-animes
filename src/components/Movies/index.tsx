import  React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Label,
    MovieScroll,
    MovieCard,
    MoviePoster,
    MovieTitle,
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
              <MoviePoster resizeMode='cover' source={{ uri: item.category_image }} />
              <MovieTitle>{ ((item.category_name).length > 15) ? (((item.category_name).substring(0, 15-3)) + '...') : item.category_name }</MovieTitle>
            </MovieCard>
          )
        })}
        </MovieScroll>
    </Container>
  );
}

export default Movies;