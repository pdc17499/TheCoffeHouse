import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import OrderScreen from './src/screens/OrderScreen';
import OtherScreen from './src/screens/OtherScreen';

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
            <AntDesign name="home" color={color} size={size}></AntDesign>
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
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
        component={OtherScreen}
        options={{
          tabBarLabel: 'Khác',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="ios-reorder-three"
              color={color}
              size={size}></Ionicons>
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
