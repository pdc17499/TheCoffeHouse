import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';

import OrderScreen from '../screens/OrderScreen';
import OtherScreen from '../screens/OtherScreen';
import StoreScreen from '../screens/StoreScreen';
import PointScreen from '../screens/PointScreen';

import HomeHeader from '../components/HomeHeader';
import CartHeader from '../components/CartHeader';
import StoreHeader from '../components/StoreHeader';
import PointHeader from '../components/PointHeader';
import OtherHeader from '../components/OtherHeader';
import OrderHeader from '../components/OrderHeader';
import SignInScreen from '../screens/SignInScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

function Home1() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'orange',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size}></AntDesign>
          ),
          headerTitle: props => <HomeHeader {...props} />,
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          headerTitle: props => <OrderHeader {...props} />,
          tabBarLabel: 'Đặt hàng',
          tabBarIcon: ({color, size}) => (
            <Feather name="coffee" color={color} size={size}></Feather>
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          headerTitle: props => <StoreHeader {...props} />,
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
        name="Point"
        component={PointScreen}
        options={{
          headerTitle: props => <PointHeader {...props} />,
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
        name="SignIn"
        component={SignInScreen}
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
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: props => <CartHeader {...props} />,
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cart"
              color={color}
              size={size}></MaterialCommunityIcons>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home1"
          component={Home1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Other"
          component={OtherScreen}
          options={{
            headerTitle: props => <OtherHeader {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
