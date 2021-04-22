import  React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons'
import {
    Container,
    Banner,
    Tags,
    MenuTag,
    Separator,
    MenuHero,
    Button,
    TextButton,
    Play,
    TextButtonPlay
} from './styles';

const Hero: React.FC = ({ data }) => {
  const navigation = useNavigation();

  const navigateToAnimeDetail = useCallback((id) => {
    navigation.navigate('AnimeDetail', { id });
  }, [navigation]);

  const navigateToVideoDetail = useCallback((id) => {
    navigation.navigate('VideoDetail', { id });
  }, [navigation]);

  return (
    <Container>
      <Banner resizeMode='contain' source={{ uri: data.logo }} />
      {/* <Tags>
        <MenuTag>Envolvente</MenuTag>
        <Separator />
        <MenuTag>Empolgantes</MenuTag>
      </Tags> */}
      <MenuHero>
        <Button>
          <Feather name='star' size={24} color='#FFF' />
          <TextButton>Favoritos</TextButton>
        </Button>

        <Play onPress={ () => navigateToVideoDetail(data.video_code)}>
          <Ionicons name='ios-play' size={26} color="#e2e2e2" />
          <TextButtonPlay>Assistir</TextButtonPlay>
        </Play>

        <Button onPress={ () => navigateToAnimeDetail(data.category_code)}>
          <Feather name='info' size={22} color='#FFF' />
          <TextButton>Saiba mais</TextButton>
        </Button>
      </MenuHero>
    </Container>
  );
}

export default Hero;