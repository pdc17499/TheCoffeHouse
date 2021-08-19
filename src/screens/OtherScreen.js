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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const OtherScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFAF0'}}>
      <ScrollView
        style={{marginHorizontal: 15}}
        showsVerticalScrollIndicator={false}>
        <View>
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
        </View>

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
        </View>
        <View style={styles.line1}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather style={{flex: 1}} name={'star'} size={20}></Feather>
            <Text style={{marginLeft: 10, fontSize: 16, flex: 10}}>
              Đánh giá đơn hàng{' '}
            </Text>
            <Feather
              style={{flex: 1}}
              name={'chevron-right'}
              size={20}></Feather>
          </View>

          <View
            style={{
              borderBottomColor: '#BEBEBE',
              borderBottomWidth: 1,
              width: '100%',
              marginLeft: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons
              style={{flex: 1}}
              name={'chat-bubble-outline'}
              size={20}></MaterialIcons>
            <Text style={{marginLeft: 10, fontSize: 16, flex: 10}}>
              Liên hệ và góp ý
            </Text>
            <Feather
              style={{flex: 1}}
              name={'chevron-right'}
              size={20}></Feather>
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
            Tài khoản
          </Text>
        </View>
        <View style={styles.line2}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              style={{flex: 1}}
              name={'account-outline'}
              size={23}></MaterialCommunityIcons>

            <Text style={{marginLeft: 10, fontSize: 16, flex: 10}}>
              Thông tin cá nhân
            </Text>
            <Feather
              style={{flex: 1}}
              name={'chevron-right'}
              size={20}></Feather>
          </View>

          <View
            style={{
              borderBottomColor: '#BEBEBE',
              borderBottomWidth: 1,
              width: '100%',
              marginLeft: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather style={{flex: 1}} name={'bookmark'} size={20}></Feather>
            <Text style={{marginLeft: 10, fontSize: 16, flex: 10}}>
              Địa chỉ đã lưu
            </Text>
            <Feather
              style={{flex: 1}}
              name={'chevron-right'}
              size={20}></Feather>
          </View>

          <View
            style={{
              borderBottomColor: '#BEBEBE',
              borderBottomWidth: 1,
              width: '100%',
              marginLeft: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather style={{flex: 1}} name={'settings'} size={20}></Feather>
            <Text style={{marginLeft: 10, fontSize: 16, flex: 10}}>
              Cài đặt
            </Text>
            <Feather
              style={{flex: 1}}
              name={'chevron-right'}
              size={20}></Feather>
          </View>

          <View
            style={{
              borderBottomColor: '#BEBEBE',
              borderBottomWidth: 1,
              width: '100%',
              marginLeft: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SimpleLineIcons
              style={{flex: 1}}
              name={'logout'}
              size={18}></SimpleLineIcons>
            <Text style={{marginLeft: 10, fontSize: 16, flex: 10}}>
              Đăng xuất
            </Text>
            <Feather
              style={{flex: 1}}
              name={'chevron-right'}
              size={20}></Feather>
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
  text: {
    fontSize: 16,
  },

  history: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    marginBottom: 15,
    paddingLeft: 20,
    paddingTop: 15,
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

  line1: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingLeft: 20,
    height: 110,
    paddingTop: 15,
  },

  line2: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingLeft: 20,
    paddingTop: 15,
    marginBottom: 20,
  },
});
