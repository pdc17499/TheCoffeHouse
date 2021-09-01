import React, {useEffect, useState} from 'react';

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import axios from 'axios';
import {getProductList} from '../services/Api';

const OrderScreen = () => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 15,
          padding: 15,
          marginBottom: 10,
        }}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.localize.vi}</Text>
          <Text
            style={{
              height: 40,
              color: '#4F4F4F',
              marginBottom: 5,
              marginRight: 5,
              fontSize: 16,
            }}>
            {item.description}
          </Text>
          <Text style={{fontSize: 16}}>{item.price} đ</Text>
        </View>

        <View style={styles.img}>
          <Image
            style={{flex: 1, borderRadius: 10, overflow: 'hidden'}}
            source={{uri: item.image}}
          />
        </View>
      </View>
    );
  };
  const [text, onChangeText] = useState('Đá Xay - Chocolate - Matcha');

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const callGetProductList = async () => {
      try {
        const response = await getProductList();

        setProduct(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    callGetProductList();
  }, []);

  // const [product, setProduct] = useState([]),

  return (
    <SafeAreaView style={{backgroundColor: '#FFFAF0', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 15,
          marginHorizontal: 15,
        }}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <Feather
            name={'chevron-down'}
            size={25}
            style={{alignSelf: 'center'}}
            color={'#4F4F4F'}></Feather>
        </View>
        <View style={styles.button}>
          <EvilIcons
            name={'search'}
            size={22}
            style={{alignSelf: 'center'}}
            color={'black'}></EvilIcons>
        </View>
        <View style={styles.button}>
          <EvilIcons
            name={'heart'}
            size={22}
            style={{alignSelf: 'center'}}
            color={'black'}></EvilIcons>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: '#CFCFCF',
          borderBottomWidth: 1,
          flex: 1,
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 15}}>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
            Đá Xay - Chocolate - Matcha
          </Text>
        </View>

        <View>
          <FlatList
            nestedScrollEnabled={true}
            data={product}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    backgroundColor: '#CFCFCF',
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CFCFCF',
  },
  input: {
    width: '82%',
    marginLeft: 10,
    fontSize: 15,
  },
  button: {
    justifyContent: 'center',
    marginLeft: 10,
    backgroundColor: '#CFCFCF',
    height: 40,
    width: '12%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CFCFCF',
  },
  item: {
    flex: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  img: {
    flex: 1,
    height: '100%',
    width: '80%',
  },
});
