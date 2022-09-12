import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../screen/HomePage';
import FavoritePage from '../screen/FavoritePage';
import GamePage from '../screen/GamePage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomePage"
        screenOptions={() => ({
          headerShown: false,
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#DDBEC3',
        })}>
        <Tab.Screen
          name={'GamePage'}
          component={GamePage}
          options={{
            tabBarLabel: 'Game',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="gamepad-variant-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'HomePage'}
          component={HomePage}
          options={{
            tabBarLabel: 'PokeDex',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="pokeball"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'FavoritePage'}
          component={FavoritePage}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="cards-heart-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
