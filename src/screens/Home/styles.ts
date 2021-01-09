import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Latest } from './index';

export const Wrapper = styled.SafeAreaView`
  background: #000000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.View``;

export const CategoryText = styled.Text`
  margin: 8px 16px;
  font-size: 20px;
  font-weight: bold;
  color: #e2e2e2;  
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

// export const LatestList = styled(
//   FlatList as new () => FlatList<Latest>,
// ).attrs({
//   numColumns: 2,
// })`
//   padding: 0 16px;
// `;

export const LatestList = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;  
  padding: 0 16px;
`;

// export const LatestItem = styled.TouchableOpacity`
// background: #fff;
// padding: 16px 16px;
// border-radius: 5px;
// margin: 8px;
// flex: 1;
// `;

// background: #fff;
//   padding: 16px 16px;
//   border-radius: 5px;
//   margin: 8px;
//   flex: 1;

export const LatestItem = styled.TouchableOpacity`
  background: #121212;
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