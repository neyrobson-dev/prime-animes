import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000000;
  flex: 1;
  padding: 0 16px;
`;

export const Container = styled.ScrollView``;

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