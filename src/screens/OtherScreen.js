import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OtherScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginHorizontal: 15}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20,
            marginBottom: 15,
            marginLeft: 10,
          }}>
          Tiện ích
        </Text>

        <View style={styles.history}>
          <Feather name={'file-text'} size={30} color={'orange'}></Feather>
          <Text style={{fontSize: 16, marginTop: 10}}>Lịch sử đơn hàng</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.block}>
            <MaterialIcons
              name={'music-video'}
              size={30}
              color={'#33CC00'}></MaterialIcons>
            <Text style={{fontSize: 16, marginTop: 10}}>Nhạc đang phát</Text>
          </View>
          <View style={{width: 10}}></View>
          <View style={styles.block}>
            <MaterialCommunityIcons
              name={'script-text'}
              size={30}
              color={'#CC99FF'}></MaterialCommunityIcons>

            <Text style={{fontSize: 16, marginTop: 10}}>Điều khoản</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 20,
              marginBottom: 15,
              marginLeft: 10,
            }}>
            Hỗ trợ
          </Text>

          <View style={styles.line}>
            <Feather name={'star'} size={20}></Feather>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtherScreen;

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 40) / 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEFDB',

    flex: 1,
  },
  text: {
    fontSize: 16,
  },

  history: {
    height: 90,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: 'white',
    marginBottom: 10,
    paddingLeft: 20,
    paddingTop: 10,
  },

  block: {
    height: 90,
    width: itemWidth,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 20,
    paddingLeft: 20,
    paddingTop: 10,
  },

  line: {
    
  },
});
