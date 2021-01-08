import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000000;
  flex: 1;
  padding: 8px 16px;
`;

export const Container = styled.ScrollView``;

export const Info = styled.View``;

export const InfoImage = styled.Image`
  align-self: center;
  width: 200px;
  height: 280px;
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
  margin: 16px 0;
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