import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const OtherHeader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          width: '60%',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 22, marginLeft: 10}}>
          Khác
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

export default OtherHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
