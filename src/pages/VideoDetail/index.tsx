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

interface Stream {
  video_id: string,
  category_id: string,
  location: string,
  locationsd: string,
}

const VideoDetail: React.FC = () => {
  const [stream, setStream] = useState({} as Stream);
  const route = useRoute();
  const routeParams = route.params as RouteParams;

  useEffect(() => {
    async function loadStream(): Promise<void> {
      await api.get('/api-animesbr-10.php', {
        params: {
          episodios: routeParams.id
        }
      }).then(response => {
        // console.log(response.data[0]);
        setStream(response.data[0]);
      });
    }

    loadStream();
  }, [routeParams]);

  return (
    <Wrapper>
      <Container> 
        {/* <Image source={{ uri: `http://cdn.appanimeplus.tk/img/${stream.category_image}`, width: 135, height: 189 }} /> */}
        <Text style={{ color: '#FFFFFF'}}>{stream.video_id}</Text>  
        <Text style={{ color: '#FFFFFF'}}>{stream.category_id}</Text>
        <Text style={{ color: '#FFFFFF'}}>{stream.location}</Text>
        <Text style={{ color: '#FFFFFF'}}>{stream.locationsd}</Text>
      {/* {detail.map((item) => (
        <>
          
        </>
      ))} */}
      </Container>
    </Wrapper>
  );
};

export default VideoDetail;
