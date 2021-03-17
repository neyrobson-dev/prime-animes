import  React, { useCallback } from 'react';
import { Container, Logo, Button, Menu } from './styles';
import { useNavigation } from '@react-navigation/native';

const Header: React.FC = () => {  
  const navigation = useNavigation();  

  const navigateToListMovies = useCallback((id) => {
    navigation.navigate('ListMovies', { id });
  }, [navigation]);

  return (
    <Container>
      <Button><Menu>Séries</Menu></Button>
      <Button onPress={() => navigateToListMovies}><Menu>Filmes</Menu></Button>
      <Button><Menu>Favoritos</Menu></Button>
    </Container>
  );
}

export default Header;