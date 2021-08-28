import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          marginLeft: 10,
          flexDirection: 'row',
          width: '55%',
        }}>
        <FontAwesome5 name={'cloud-moon'} size={25}></FontAwesome5>
        <Text style={{fontWeight: 'bold', marginLeft: 10, fontSize: 16}}>
          Chào buổi tối, Phúc
        </Text>
      </View>

      <View
        style={{
          height: 40,
          width: 65,
          borderWidth: 1,
          borderRadius: 20,
          borderColor: '#E8D3E3',
          backgroundColor: 'white',
          flexDirection: 'row',
          marginLeft: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name="ticket-confirmation-outline"
          color={'orange'}
          size={25}></MaterialCommunityIcons>
        <Text style={{fontWeight: 'bold', marginLeft: 10, fontSize: 16}}>
          6
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          width: 40,
          borderWidth: 1,
          borderColor: '#E8D3E3',
          borderRadius: 20,
          backgroundColor: 'white',
          marginLeft: 15,
        }}>
        <FontAwesome5 name={'bell'} size={22}></FontAwesome5>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
