import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, Image, Platform, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { Video, VideoFullscreenUpdateEvent } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

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
  title: string,
  location: string,
  locationsd: string,
}

const VideoDetail: React.FC = () => {
  const [stream, setStream] = useState({} as Stream);
  const [videoLoad, setVideoLoad] = useState(false);
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const navigation = useNavigation();

  useEffect(() => {
    async function loadStream(): Promise<void> {
      await api.get('/api-animesbr-10.php', {
        params: {
          episodios: routeParams.id
        }
      }).then(response => {
        setStream(response.data[0]);
      });
    }

    loadStream();
  }, [routeParams]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: stream.title ? stream.title : ""
    })
  }, [navigation, stream])

  const onFullscreenUpdate = async ({fullscreenUpdate}: VideoFullscreenUpdateEvent) => {    
    if (Platform.OS === 'android') {
      switch (fullscreenUpdate) {
        case Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT:
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
            break;
        case Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
            break;
      }
    }
  }

  const onLoad = async () => {
    setVideoLoad(true);
  }

  // if (!videoLoad) {
  //   return(
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" color="#999" />
  //     </View>
  //   );
  // }

  return (
    <Wrapper>
      <Container>
        <Video
          source={{ uri: stream.location }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          isLooping
          usePoster={true}
          posterSource={1}
          useNativeControls={videoLoad}
          style={{ width: '100%', height: '65%' }}
          onFullscreenUpdate={onFullscreenUpdate}
          onLoad={onLoad}
        />

        {/* <Image source={{ uri: `http://cdn.appanimeplus.tk/img/${stream.category_image}`, width: 135, height: 189 }} /> */}
        {/* <Text style={{ color: '#FFFFFF'}}>{stream.video_id}</Text>  
        <Text style={{ color: '#FFFFFF'}}>{stream.category_id}</Text>
        <Text style={{ color: '#FFFFFF'}}>{stream.location}</Text>
        <Text style={{ color: '#FFFFFF'}}>{stream.locationsd}</Text> */}
      {/* {detail.map((item) => (
        <>
          
        </>
      ))} */}
      </Container>
    </Wrapper>
  );
};

export default VideoDetail;
