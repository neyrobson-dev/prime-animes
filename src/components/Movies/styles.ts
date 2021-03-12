import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  padding: 10px 0;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px 10px;
`;

export const MovieScroll = styled.ScrollView`
  padding-left: 10px;
`;

export const MovieCard = styled.TouchableOpacity`
  padding-right: 9px;
`;

export const MoviePoster = styled.Image`
  width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
  height: 150px;
  border-radius: 5px;
`;