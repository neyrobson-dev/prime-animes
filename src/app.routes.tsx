import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import AnimeDetail from './pages/AnimeDetail';
import VideoDetail from './pages/VideoDetail';
import ListCategory from './pages/ListCategory';
import ListLetter from './pages/ListLetter';
import ListMovies from './pages/ListMovies';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#000'
        }
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
          headerShown: false,
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#fff',
          // headerRight: () => (
          //   <TouchableOpacity>
          //     <FontAwesome name="star-o" size={24} color="white"/>
          //   </TouchableOpacity>
          // ),
          // headerRightContainerStyle: {
          //   marginRight: 16,
          // },
        }}
      />

      <App.Screen
        name="VideoDetail"
        component={VideoDetail}
        options={{
          headerShown: true,
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
          // headerRight: () => (
          //   <TouchableOpacity>
          //     <Feather name="download" size={24} color="white"/>
          //   </TouchableOpacity>
          // ),
          // headerRightContainerStyle: {
          //   marginRight: 16,
          // },
        }}
      />

      <App.Screen
        name="ListCategory"
        component={ListCategory}
        options={{
          headerShown: true,
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
        }}
      />

      <App.Screen
        name="ListLetter"
        component={ListLetter}
        options={{
          headerShown: true,
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
        }}
      />

      <App.Screen
        name="ListMovies"
        component={ListMovies}
        options={{
          headerShown: true,
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
        }}
      />
      
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
