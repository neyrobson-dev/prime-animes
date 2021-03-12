import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  padding: 10px 0;
`;

export const Label = styled.Text`
  color: #e2e2e2;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px 10px;
`;

export const MovieScroll = styled.ScrollView`
  padding: 0 10px;
`;

export const MovieCard = styled.TouchableOpacity`
  padding-right: 10px;
  align-items: center;
`;

export const MoviePoster = styled.Image`
  width: 120px
  height: 120px;
  border-radius: 60px;
  border-width: 3px;
  border-color: #e2e2e2;
`;

export const MovieTitle = styled.Text`
  color: #e2e2e2;
  font-size: 12px;
  font-weight: bold;
  margin: 0 8px;
`;