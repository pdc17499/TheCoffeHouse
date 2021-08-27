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

import {useState} from 'react';

const STORE = [
  {
    address: '68A Hoàng Cầu Mới, Đống Đa, Hà Nội, Việt Nam ',
    distance: 'cách đây 0,5 km',
    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668e1_hoang_20cau.jpeg',
  },
  {
    address: '1 Thái Hà, Đống Đa, Hà Nội, Việt Nam',
    distance: 'cách đây 0,61 km',
    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b3b04d5fbc68621f3385252_thai_20ha.jpg',
  },
  {
    address: '36 Hoàng Cầu, Đống Đa, Hà Nội, Việt Nam',
    distance: 'cách đây 0,63 km',
    uri: 'https://minio.thecoffeehouse.com/image/admin/store/601a0ff87adfeb16df74d6d2_TAMDONGCUA_20_281_29.jpg',
  },
  {
    address: '30 Hào Nam, Đống Đa, Hà Nội, Việt Nam',
    distance: 'cách đây 0,8 km',
    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5bda6dcffbc68614df6e1996_hao_20nam.jpg',
  },
  {
    address: '11 Vương Thừa Vũ, Thanh Xuân, Hà Nội, Việt Nam',
    distance: 'cách đây 1,54 km',
    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5cadc5b6696fb35468487a36_vuong_20thua_20vi.jpg',
  },

  {
    address: '259 Kim Mã, Ba Đình, Hà Nội, Việt Nam',
    distance: 'cách đây 1,69 km',
    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668d8_5b21f8cb1acd4d02032668d8_kim_20ma.jpeg',
  },
  {
    address: '122 Bùi Thị Xuân, Hai Bà Trưng, Hà Nội, Việt Nam',
    distance: 'cách đây 2,56 km',
    uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668e4_bui_20thi_20xuan.jpeg',
  },
];

const StoreScreen = () => {
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
            source={{uri: item.uri}}
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
            {item.address}
          </Text>
          <Text style={{fontSize: 16}}>{item.distance}</Text>
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
              data={STORE}
              renderItem={renderItem}
              keyExtractor={item => item.address}
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
