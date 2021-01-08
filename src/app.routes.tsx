import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TabRoutes from './tab.routes';
import AnimeDetail from './pages/AnimeDetail';
import VideoDetail from './pages/VideoDetail';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="TabRoutes"
    >
      <App.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <App.Screen
        name="AnimeDetail"
        component={AnimeDetail}
        options={{
          headerShown: true,
          gestureEnabled: false,
        }}
      />

      <App.Screen
        name="VideoDetail"
        component={VideoDetail}
        options={{
          headerShown: true,
          gestureEnabled: false,
        }}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
