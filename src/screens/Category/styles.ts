import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { FlatList } from 'react-native';

export const Wrapper = styled.SafeAreaView`
  background: #000000;
  flex: 1;
`;

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

export const Container = styled.ScrollView``;

export const CategoryList = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;  
  margin: 8px 0;
`;

export const CategoryItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #121212;
  border-color: #333;
  border-width: 1px;
  width: 30%;
  height: 70px;
  margin: 8px 4px;
`;

export const CategoryItemTitle = styled.Text`
  color: #e2e2e2;
  font-size: 12px;
  font-weight: bold;
  margin: 0 8px;
`;