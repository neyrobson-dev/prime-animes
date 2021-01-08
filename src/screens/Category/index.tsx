import React from 'react';
import { Text, View } from 'react-native';

import {
  Container
} from './styles';

const Category: React.FC = () => {
  return (
    <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Categorias</Text>
      </View>
    </Container>
  );
};

export default Category;
