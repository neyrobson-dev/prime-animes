import React, { useEffect, useLayoutEffect, useCallback, useState } from 'react';
import { Text, View, Image, Platform, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Video, VideoFullscreenUpdateEvent } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Wrapper,
  Container,
  Actions,
  Action,
  ActionText,
  Content,
  Title,
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
  locationhd: string,
}

const VideoDetail: React.FC = () => {
  const [stream, setStream] = useState({} as Stream);
  const [videoLoad, setVideoLoad] = useState(false);
  const [epsodeId, setEpsodeId] = useState("");
  const [progress, setProgress] = useState<Number>(0);
  const [url, setUrl] = useState("");
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const navigation = useNavigation();

  const STREAMING_DATA_TOKEN = '32489800000000';
  const STREAMING_DATA_R = '10000';

  useEffect(() => {
    setEpsodeId(routeParams.id);
  }, []);

  useEffect(() => {
    async function loadStream(): Promise<void> {
      const streamingDataR = Math.floor(Math.random() * 90000) + 10000;
      const timeToMatch = (Date.now() / 1000) * 2;
      const streamingDataToken = (timeToMatch * streamingDataR).toFixed();
      // await axios.get(`https://appanimeplus.tk/meuanimetv-40.php?episodios=${epsodeId}&token=${STREAMING_DATA_TOKEN}&r=${STREAMING_DATA_R}`).then((response: any) => {
      //   setStream(response.data[0]);
      // });
      await axios.get('https://appanimeplus.tk/meuanimetv-40.php', {
        params: {
          episodios: epsodeId,
          token: streamingDataToken,
          r: streamingDataR,
        },
        headers: {
          'X-Auth': 'VnM4ejB1dElLajZDZDhiSU02aGF0RmdDQWxXNDl3SEQzWjE2Ulg1K3ZOWjZkbjJXZjBqT2xnT0FVdnVwd2VjTEdkaS9KM0VlaHM4L1psc1J4R25SWHVpTGdjMVBvYUViTExhQXZpMzZGTytiVjh0SnQzUDVxL3ZVTDVZdkYwSDE1bFdFV1V4WGRwbUFFM0NJNjJOWEkvSndhbFVjZXNZYVRROGFKK2lkT2lEaU9nMElQT0hWTFlxNzlHajNPSVNhSjdnUDZTeldtbHVRaXlxMk5qSkFKV09NbDBIQkZhVTJYMitaaGtrMTd1OVJlSE5saVlGdUJOMk5TSGlBbzByYjFGeDN5N0Q2eHhjZFdzWS90b1JacFJtRGJ5QVdXLzBlTmhKK3UvVElGa3Q4T1Q5ODFZQjBzN0gxQVArZnY5NGo=',
        }
      }).then((response: any) => {
        setStream(response.data[0]);
      }).catch((error) => {
        console.log(error);
      })
    }

    loadStream();    
    onLoadVideo(stream.location);
  }, [epsodeId, stream]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: stream.title ? stream.title : "",
      // headerRight: () => (
      //   <TouchableOpacity onPress={donwloadFile}>
      //     <Feather name="download" size={24} color="white"/>
      //   </TouchableOpacity>
      // ),
    })
  }, [navigation, stream])

  const nextVideo = async () => {
    await axios.get(`https://appanimeplus.tk/meuanimetv-40.php?episodios=${stream.video_id}&catid=${stream.category_id}&next`).then(response => {
      setEpsodeId(response.data[0].video_id);
    });
  }

  const previousVideo = async () => {
    await axios.get(`https://appanimeplus.tk/meuanimetv-40.php?episodios=${stream.video_id}&catid=${stream.category_id}&previous`).then(response => {
      setEpsodeId(response.data[0].video_id);
    });
  }

  const navigateToAnimeDetail = useCallback((id) => {
    navigation.navigate('AnimeDetail', { id });
  }, [navigation]);  

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

  const onLoadVideo = useCallback((url) => {
    setUrl(url)
  }, []);

  // if (!videoLoad) {
  //   return(
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" color="#999" />
  //     </View>
  //   );
  // }

  // const donwloadFile = async () => {
  //   var fileName = stream.title;    
  //   const fileUri = FileSystem.documentDirectory + `${fileName.replace(/ /g, "-")}.mp4`;
  //   const url = stream.location;
  
  //   let downloadObject = FileSystem.createDownloadResumable(
  //     url,
  //     fileUri
  //   );

  //   try {
  //     const response = await downloadObject.downloadAsync();
  //     console.log('Finished downloading to ', response?.uri);
  //   } catch (e) {
  //     console.error(`Erro ao fazer download: ${e}`);
  //   }
  // }  

  return (
    <Wrapper>
      <Actions>
        {stream.location != "" && (
          <Action onPress={() => onLoadVideo(stream.location)}>
            <ActionText>Normal</ActionText>
          </Action>
        )}
        {stream.locationsd != "" && (
          <Action onPress={() => onLoadVideo(stream.locationsd)}>
            <ActionText>SD</ActionText>
          </Action>
        )}
        {stream.locationhd != "" && (
          <Action onPress={() => onLoadVideo(stream.locationhd)}>
            <ActionText>HD</ActionText>
          </Action>
        )}
      </Actions>
      <Container>
        <Video
          source={{ uri: url }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          usePoster={true}
          posterSource={1}
          useNativeControls={videoLoad}
          style={{ width: '100%', height: '50%' }}
          onFullscreenUpdate={onFullscreenUpdate}
          onLoad={onLoad}
        />

        <Content>

          <Actions>
            <Action onPress={previousVideo}>
              <Feather name="chevrons-left" size={30} color="#e2e2e2" />
            </Action>
            <Action onPress={() => {navigateToAnimeDetail(stream.category_id)}}>
              <Feather name="menu" size={30} color="#e2e2e2" />
            </Action>
            <Action onPress={nextVideo}>
              <Feather name="chevrons-right" size={30} color="#e2e2e2" />
            </Action>
          </Actions>

          <Title>{stream.title}</Title>

        </Content>

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
