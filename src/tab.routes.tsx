import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from './screens/Home';
import Category from './screens/Category';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
        style: {
            backgroundColor: '#121212',
            borderTopColor: '#121212',
        },
        activeTintColor: '#e2e2e2',
        labelStyle: {
            fontSize: 10,
            fontWeight: '600',
        },
        inactiveTintColor: '#666666',
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Feather size={20} name="home" color={color} />,
        title: 'Inicio',
      }}
      name="Home"
      component={Home}
    />    

    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Feather size={20} name="list" color={color} />,
        title: 'Categorias',
      }}
      name="Category"
      component={Category}
    />
    
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Feather size={20} name="search" color={color} />,
        title: 'Buscar',
      }}
      name="Search"
      component={Category}
    />

    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Feather size={20} name="download" color={color} />,
        title: 'Downloads',
      }}
      name="Download"
      component={Category}
    />

    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Feather size={20} name="menu" color={color} />,
        title: 'Mais',
      }}
      name="More"
      component={Category}
    />
  </Tab.Navigator>
)

export default TabRoutes;