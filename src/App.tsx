import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import AppRoutes from './app.routes';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#000000" translucent/>
    <View style={{ flex: 1 }}>
      <AppRoutes />
    </View>
  </>
);

export default App;
