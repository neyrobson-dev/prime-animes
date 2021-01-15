import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Wrapper = styled.SafeAreaView`
  background: #000000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #2c2c2c;
  padding: 0 36px;
`;

export const HeaderText = styled.Text`
  margin: 8px 16px;
  font-size: 20px;
  font-weight: bold;
  color: #e2e2e2;
`;

export const LatestList = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 8px 0;
`;

export const LatestItem = styled.TouchableOpacity`
  width: 33.33%;
  height: 189px;
  margin-bottom: 48px;
`;

export const LatestItemImage = styled.Image`
  width: 95%;
  height: 95%;
  align-self: center;
  border-radius: 5px;
`;

export const LatestItemTitle = styled.Text`
  color: #e2e2e2;
  font-size: 12px;
  font-weight: bold;
  margin: 0 8px;
`;