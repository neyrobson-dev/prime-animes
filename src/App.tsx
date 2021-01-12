import React, { useEffect } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import * as Updates from 'expo-updates';

import AppRoutes from './app.routes';

const App: React.FC = () => {
  useEffect(() => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      async function updateApp() {
        const { isAvailable } = await Updates.checkForUpdateAsync();

        if (isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      }
      updateApp();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000000" translucent/>
      <View style={{ flex: 1 }}>
        <AppRoutes />
      </View>
    </>
  );  
};

export default App;
