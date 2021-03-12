import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.SafeAreaView`
  background: #000000;
`;

export const Container = styled.ScrollView`
  flex: 1;  
`;

export const Info = styled.View`
  position: absolute;
	width: 100%;
	bottom: 8px;
  padding: 0 16px;
`;

// export const InfoImage = styled.Image`
//   align-self: center;
//   width: 200px;
//   height: 280px;
// `;

export const InfoImage = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 60) / 100}px;
`;

export const Gradient = styled(LinearGradient)`
  height: 100%;
`;

export const InfoTitle = styled.Text`
  color: #e2e2e2;
  font-size: 25px;
`;

export const Description = styled.Text`
  color: #e2e2e2;
  font-size: 14px;
  text-align: justify;
  margin: 16px 0;
`;

export const Genres = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start; 
  align-items: center;
  margin: 16px 0;
`;

export const GenresText = styled.Text`
  color: #ffffff;
  font-size: 11px;
  margin: 2px;
  padding: 4px 8px;
  border-radius: 50px;
  background: #999;
`;

export const Year = styled.Text`
  color: #e2e2e2;
  font-size: 16px;
  text-align: justify;
`;

export const Episodes = styled.View`
`;

export const EpisodesTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #e2e2e2;
  margin: 16px;
`;

export const EpisodeItem = styled.TouchableOpacity` 
  background: #121212;
  padding: 20px 16px
  border-top-width: 1px;
  border-top-color: #333;
`;

export const EpisodeItemText = styled.Text`
  color: #e2e2e2;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 25px 0 25px;
  width: 100%;
`;

export const Action = styled.TouchableOpacity``;

export const ActionText = styled.Text`
  font-size: 16px;
  color: #fff;
  letter-spacing: 0.1px;
`;