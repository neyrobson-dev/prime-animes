import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { FlatList } from 'react-native';
import { Latest } from './index';
import { RectButton } from 'react-native-gesture-handler';

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
`;

export const HeaderText = styled.Text`
  margin: 8px 16px;
  font-size: 20px;
  font-weight: bold;
  color: #e2e2e2;
`;

export const Letter = styled.View`
  flex-direction: row;
  align-items: center;  
  justify-content: space-between;
  padding: 16px 16px;
  background: #2c2c2c;
`;

export const LetterContent = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))``;

export const LetterButton = styled.TouchableOpacity``;

export const LetterText = styled.Text`
  color: #ededed;
  margin: 0 16px;
`;

export const Category = styled.View``;

export const CategoryText = styled.Text`
  margin: 8px 16px;
  font-size: 20px;
  font-weight: bold;
  color: #e2e2e2;
  padding-left: 16px;
  border-left-width: 2px;
  border-left-color: red;
`;

export const ListContent = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16
  }
}))``;

export const Item = styled.TouchableOpacity`
  background: #121212;
  width: 135px;
  height: 240px;
  border-radius: 5px;
  margin-right: 8px;
`;

export const ItemTitle = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  margin: 0 8px;
`;

export const ItemImage = styled.Image`
  align-self: center;
  border-radius: 5px;
`;

export const LatestList = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0 16px;
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