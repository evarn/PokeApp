import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../screen/HomePage';
import FavoritePage from '../screen/FavoritePage';
import ComparePage from '../screen/ComparePage';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#DDBEC3',
        }}>
        <Tab.Screen name={'FavoritePage'} component={FavoritePage} />
        <Tab.Screen name={'HomePage'} component={HomePage} />
        <Tab.Screen name={'ComparePage'} component={ComparePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
