import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import {
  Wrapper,
  Container
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

const AnimeDetail: React.FC = () => {
  const [detail, setDetail] = useState({} as Detail);
  const route = useRoute();
  const routeParams = route.params as RouteParams;

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

  return (
    <Wrapper>
      <Container> 
        <Image source={{ uri: `http://cdn.appanimeplus.tk/img/${detail.category_image}`, width: 135, height: 189 }} />
        <Text style={{ color: '#FFFFFF'}}>{detail.category_name}</Text>  
        <Text style={{ color: '#FFFFFF'}}>{detail.category_description}</Text>
        <Text style={{ color: '#FFFFFF'}}>{detail.category_genres}</Text>
        <Text style={{ color: '#FFFFFF'}}>{detail.ano}</Text>
      {/* {detail.map((item) => (
        <>
          
        </>
      ))} */}
      </Container>
    </Wrapper>
  );
};

export default AnimeDetail;
