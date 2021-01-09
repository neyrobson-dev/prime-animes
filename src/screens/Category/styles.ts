import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Wrapper = styled.SafeAreaView`
  background: #000000;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.ScrollView``;

export const CategoryList = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;  
  padding: 0 16px;
`;

export const CategoryItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #121212;
  border-color: #333;
  border-width: 1px;;
  width: 29%;
  height: 70px;
  margin: 8px;  
`;

export const CategoryItemTitle = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  margin: 0 8px;
`;