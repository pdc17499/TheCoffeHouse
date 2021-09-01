import React from 'react';
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

import {useState, useEffect} from 'react';
import axios from 'axios';
import {getStoreList} from '../services/Api';

const StoreScreen = () => {
  const [store, setStore] = useState([]);
  useEffect(() => {
    const callGetStoreList = async () => {
      try {
        const response = await getStoreList();

        setStore(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    callGetStoreList();
  }, []);
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
        <View style={styles.img}>
          <Image
            style={{flex: 1, borderRadius: 10, overflow: 'hidden'}}
            source={{uri: item.image_1}}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>THE COFFEE HOUSE</Text>
          <Text
            style={{
              height: 40,
              color: '#4F4F4F',
              marginBottom: 5,
              marginRight: 5,
              fontSize: 16,
            }}>
            {item.address.full_address}
          </Text>
          <Text style={{fontSize: 16}}>
            {item.opening_time} - {item.closing_time}
          </Text>
        </View>
      </View>
    );
  };
  const [text, onChangeText] = useState('');
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 15,
        }}>
        <View style={styles.search}>
          <Feather
            name={'search'}
            size={16}
            color={'black'}
            style={{alignSelf: 'center'}}></Feather>
          <TextInput
            style={{fontSize: 16, alignSelf: 'center', marginLeft: 5}}
            onChangeText={onChangeText}
            value={text}
            placeholder={'Nhập tên đường, quận huyện'}
          />
        </View>

        <View style={styles.map}>
          <Feather
            name={'map'}
            size={18}
            style={{alignSelf: 'center'}}
            color={'black'}></Feather>
          <Text
            style={{
              marginLeft: 10,
              fontWeight: 'bold',
              fontSize: 15,
              alignSelf: 'center',
            }}>
            Bản đồ
          </Text>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: '#E8E8E8',
          borderBottomWidth: 1,
          flex: 1,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#FFFAF0'}}>
        <View style={styles.container}>
          <View>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', marginVertical: 15}}>
              Các cửa hàng khác
            </Text>
          </View>

          <View>
            <FlatList
              nestedScrollEnabled={true}
              data={store}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    width: '73%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E8E8E8',
    paddingRight: 15,
    paddingLeft: 15,
  },

  map: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: 'white',
    height: 50,
    width: '25%',
  },
  container: {
    marginHorizontal: 15,
  },
  item: {
    flex: 2,
    marginLeft: 15,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'gray',
  },

  img: {
    flex: 1,
    height: '100%',
    width: '80%',
  },
});
