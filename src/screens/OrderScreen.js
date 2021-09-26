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
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';
import {getProductList} from '../services/Api';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [itemModal, setItemModal] = useState({localize: ''});
  const onAddToCart = item => () => {
    dispatch({type: 'ADD_CART', data: {...item, quantity: 1}});
    setIsVisible(false);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsVisible(true), setItemModal(item);
        }}>
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
      </TouchableOpacity>
    );
  };
  const [text, onChangeText] = useState('Đá Xay - Chocolate - Matcha');

  const [text2, onChangeText2] = useState('');

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

        <Modal
          testID={'modal1'}
          isVisible={isVisible}
          onSwipeComplete={() => setIsVisible(false)}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={styles.view}>
          <View style={styles.modal}>
            <View style={styles.imgModal}>
              <Image style={{flex: 1}} source={{uri: itemModal.image}} />
            </View>
            <TouchableOpacity
              style={{position: 'absolute', right: 10, top: 10}}
              onPress={() => setIsVisible(false)}>
              <View
                style={{
                  borderWidth: 1,
                  backgroundColor: 'grey',
                  height: 40,
                  borderColor: 'grey',
                  borderRadius: 20,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <EvilIcons
                  name={'close'}
                  size={30}
                  color={'white'}
                  style={{alignSelf: 'center'}}></EvilIcons>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  flex: 6,
                }}>
                {itemModal.localize.vi}
              </Text>
              <EvilIcons
                name={'heart'}
                size={35}
                style={{marginLeft: 5, flex: 1}}></EvilIcons>
            </View>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 15,
                fontWeight: 'bold',
                color: 'grey',
              }}>
              {itemModal.price}đ
            </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={3}
              style={{
                fontSize: 14,
                marginLeft: 15,
                marginTop: 10,
                marginRight: 15,
                color: 'grey',
              }}>
              {itemModal.description}
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 15,
                marginTop: 10,
                fontWeight: 'bold',
              }}>
              Yêu cầu khác
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 15,
                marginTop: 5,
                color: 'grey',
              }}>
              Những tùy chọn khác
            </Text>
            <TextInput
              style={styles.input2}
              onChangeText={onChangeText2}
              value={text2}
              placeholder="Thêm ghi chú"></TextInput>

            <View style={styles.modalBot}>
              <TouchableOpacity onPress={onAddToCart(itemModal)}>
                <View
                  style={{
                    marginHorizontal: 15,
                    borderWidth: 1,
                    backgroundColor: 'orange',
                    height: 50,
                    borderColor: 'orange',
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                    Chọn sản phẩm
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  input2: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
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

  imgModal: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: '50%',
    width: '100%',
    resizeMode: 'cover',
  },

  modal: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalBot: {
    flex: 1,
    width: '100%',

    marginTop: 10,
  },
});
