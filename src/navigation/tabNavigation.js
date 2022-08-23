import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../screen/HomePage';
import FavoritePage from '../screen/FavoritePage';
import ComparePage from '../screen/ComparePage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#DDBEC3',

          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'HomePage') {
              iconName = 'pokeball';
            }
            if (route.name === 'FavoritePage') {
              iconName = 'cards-heart-outline';
            }
            if (route.name === 'ComparePage') {
              iconName = 'compare';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}>
        <Tab.Screen name={'FavoritePage'} component={FavoritePage} />
        <Tab.Screen name={'HomePage'} component={HomePage} />
        <Tab.Screen name={'ComparePage'} component={ComparePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
