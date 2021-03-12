import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000000;
  flex: 1;
`;

export const Container = styled.View``;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 40px;
  background: #121212;
`;

export const ActionText = styled.Text`
  color: #e2e2e2;
`;

export const Content = styled.View`
  padding: 0 16px;
`;

export const Title = styled.Text`
  margin-top: 24px;
  font-size: 25px;
  font-weight: bold;
  color: #e2e2e2;
`;
