import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      paddingLeft: 16
    }
}))``;

export const Option = styled.TouchableOpacity`
  background: #121212;
  width: 135px;
  height: 240px;
  border-radius: 5px;
  margin-right: 8px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  margin: 0 8px;
`;

export const Img = styled.Image`
  align-self: center;
`;