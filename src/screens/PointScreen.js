import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const PointScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flexDirection: 'row', marginBottom: 10, marginLeft: 20}}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 15,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
            borderColor: '#E8E8E8',
            backgroundColor: '#E8E8E8',
            width: 120,
            marginTop: 5,
          }}>
          <Text style={{color: 'orange', fontWeight: 'bold'}}>Tích điểm</Text>
        </View>
        <View
          style={{
            height: 35,
            width: 120,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
            marginTop: 5,
          }}>
          <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>
            Đổi ưu đãi
          </Text>
        </View>
      </View>
      <ScrollView style={{backgroundColor: '#FFFAF0'}}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 10}}>
            <View style={styles.block}>
              <MaterialCommunityIcons
                style={{marginLeft: 5}}
                name={'gift-outline'}
                size={25}
                color={'orange'}></MaterialCommunityIcons>
              <Text style={{fontSize: 16, marginTop: 10}}>Đổi ưu đãi</Text>
            </View>
            <View style={{width: 10}}></View>
            <View style={styles.block}>
              <MaterialCommunityIcons
                style={{marginLeft: 5}}
                name={'ticket-confirmation-outline'}
                size={25}
                color={'orange'}></MaterialCommunityIcons>

              <Text style={{fontSize: 16, marginTop: 10}}>
                Phiếu ưu đãi của bạn
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <View style={styles.block}>
              <Entypo
                style={{marginLeft: 5}}
                name={'back-in-time'}
                size={25}
                color={'orange'}></Entypo>

              <Text style={{fontSize: 16, marginTop: 10}}>
                {' '}
                Lịch sử giao dịch
              </Text>
            </View>
            <View style={{width: 10}}></View>
            <View style={styles.block}>
              <Fontisto
                style={{marginLeft: 5}}
                name={'person'}
                size={23}
                color={'#63B8FF'}></Fontisto>

              <Text style={{fontSize: 16, marginTop: 10}}>
                Quyền lợi của bạn
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{marginLeft: 5, fontSize: 20, fontWeight: 'bold'}}>
              Phiếu ưu đãi của bạn{' '}
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 15,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 5,
                borderColor: '#FFE4C4',
                backgroundColor: '#FFE4C4',
                width: 120,
              }}>
              <Text style={{color: 'orange', fontWeight: 'bold'}}>
                Xem tất cả
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PointScreen;

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 40) / 2;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  block: {
    height: 90,
    width: itemWidth,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 10,
    paddingLeft: 20,
    paddingTop: 15,
  },
});
