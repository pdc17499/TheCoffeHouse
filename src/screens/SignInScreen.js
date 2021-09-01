import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignInScreen = () => {
  const [text, onChangeText] = useState('');
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Image
        style={styles.img}
        source={require('../images/background.jpg')}></Image>
      <View style={styles.container}>
        <Text style={{fontSize: 16, marginTop: 20}}>Chào mừng bạn đến với</Text>
        <Image style={styles.title} source={require('../images/title.jpg')} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            backgroundColor: 'white',
            borderColor: '#B5B5B5',
            borderRadius: 10,
            width: '100%',
            paddingLeft: 15,
            height: 50,
            marginVertical: 15,
          }}>
          <Image style={styles.logo} source={require('../images/vn.jpg')} />
          <Text style={{fontSize: 16, marginLeft: 5, marginRight: 10}}>
            +84
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Nhập số điện thoại"
            keyboardType="numeric"
          />
        </View>

        <View
          style={{
            height: 50,
            width: '100%',
            borderWidth: 1,
            backgroundColor: '#B5B5B5',
            borderColor: '#B5B5B5',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Đăng nhập</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 35,
            alignItems: 'center',
          }}>
          <View
            style={{
              borderBottomColor: '#B5B5B5',
              borderBottomWidth: 1,
              width: '40%',
            }}
          />
          <Text
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              marginHorizontal: 10,
            }}>
            HOẶC
          </Text>
          <View
            style={{
              borderBottomColor: '#B5B5B5',
              borderBottomWidth: 1,
              width: '40%',
            }}
          />
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            borderWidth: 1,
            backgroundColor: '#4876FF',
            borderColor: '#4876FF',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <MaterialCommunityIcons
            name={'facebook'}
            size={20}
            color={'white'}></MaterialCommunityIcons>
          <Text style={{color: 'white', fontSize: 16, marginLeft: 5}}>
            Tiếp tục bằng Facebook
          </Text>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            borderWidth: 1,
            backgroundColor: 'white',
            borderColor: '#B5B5B5',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            flexDirection: 'row',
            marginTop: 5,
          }}>
          <MaterialCommunityIcons
            name={'google'}
            size={20}
            color={'black'}></MaterialCommunityIcons>
          <Text style={{fontSize: 16, marginLeft: 5, color: 'black'}}>
            Tiếp tục bằng Google
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  input: {
    borderColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  logo: {
    height: 20,
    width: 20,
  },
  title: {
    height: 40,
    width: '70%',
  },
  img: {
    width: '100%',
    height: 180,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    flex: 1,
    position: 'absolute',
    top: 150,
  },
});
