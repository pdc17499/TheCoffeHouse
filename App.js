import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chào bạn mới"
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Chào bạn mới"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Đặt hàng',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="search"
              color={color}
              size={size}></MaterialIcons>
          ),
        }}
      />
      <Tab.Screen
        name="Cửa hàng"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Tích điểm',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="shopping-bag"
              color={color}
              size={size}></MaterialIcons>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
