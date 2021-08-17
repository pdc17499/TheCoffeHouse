import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chào bạn mới"
      screenOptions={{
        tabBarActiveTintColor: 'orange',
      }}>
      <Tab.Screen
        name="Chào bạn mới"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size}></Feather>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Đặt hàng',
          tabBarIcon: ({color, size}) => (
            <Feather name="coffee" color={color} size={size}></Feather>
          ),
        }}
      />
      <Tab.Screen
        name="Cửa hàng"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Cửa hàng',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Tích điểm',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="ticket-percent-outline"
              color={color}
              size={size}></MaterialCommunityIcons>
          ),
        }}
      />
      <Tab.Screen
        name="Khác"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Khác',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="ticket-percent-outline"
              color={color}
              size={size}></MaterialCommunityIcons>
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
