import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants';

export const Container = styled.ScrollView`
  flex: 1;
	background-color: #000;
`;

export const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 70) / 100}px;
`;

export const Gradient = styled(LinearGradient)`
  height: 100%;
`;

export const Episodes = styled.View`
  padding: 20px 0;
`

export const EpisodesLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px 10px;
`

// export const MovieScroll = styled.ScrollView`
//   padding-left: 10px;
// `

export const MovieCard = styled.TouchableOpacity`
  align-items: center;
  flex-grow: 1px;
  flex-basis: 0px;
  margin-bottom: 10px;
`

export const MoviePoster = styled.Image`
  width: ${Math.round((Dimensions.get('window').width * 31) / 100)}px;
  height: 180px;
  border-radius: 5px;
`

export const MovieTitle = styled.Text`
  color: #e2e2e2;
  font-size: 12px;
  font-weight: bold;
  margin: 0 8px;
`