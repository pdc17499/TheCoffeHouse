import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
const CartScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(store => store.cartReducer.products);

  const onChangeQuantity = (item, num) => () => {
    dispatch({type: 'CHANGE_QUANTITY', data: item, num: num});
  };

  const onRemoveItem = item => () => {
    dispatch({type: 'REMOVE_ITEM', data: item});
  };
  const onRemoveAll = () => {
    dispatch({type: 'REMOVE_ALL'});
  };

  const renderItem = ({item}) => {
    const price = item.price * item.quantity;

    return (
      <View>
        <View
          style={{
            marginLeft: 5,
            marginVertical: 10,
            width: '100%',
            flex: 1,
            marginLeft: 10,
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

              <Text style={{fontSize: 16}}>{price} đ</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 15,
                }}>
                <TouchableOpacity onPress={onChangeQuantity(item, -1)}>
                  <FontAwesome name={'minus-square-o'} size={30}></FontAwesome>
                </TouchableOpacity>
                <Text
                  style={{
                    marginHorizontal: 20,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.quantity}
                </Text>
                <TouchableOpacity onPress={onChangeQuantity(item, 1)}>
                  <FontAwesome name={'plus-square-o'} size={30}></FontAwesome>
                </TouchableOpacity>

                <TouchableOpacity onPress={onRemoveItem(item)}>
                  <FontAwesome
                    name={'trash'}
                    size={25}
                    color={'black'}
                    style={{marginLeft: 40}}></FontAwesome>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.img}>
              <Image
                style={{flex: 1, borderRadius: 10, overflow: 'hidden'}}
                source={{uri: item.image}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={productList}
          renderItem={renderItem}
          keyExtractor={item => item._id?.toString()}
          // extraData={}
        />
        {productList?.length ? (
          <View style={styles.bottom}>
            <TouchableOpacity style={{marginTop: 10}} onPress={onRemoveAll}>
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
                  flexDirection: 'row',
                }}>
                <FontAwesome
                  name={'trash'}
                  size={30}
                  color={'red'}></FontAwesome>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 20,
                  }}>
                  Xóa đơn hàng
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 20,
                marginHorizontal: 15,
                borderWidth: 1,
                backgroundColor: 'orange',
                height: 50,
                borderColor: 'orange',
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: 20,
                }}>
                Đặt hàng
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              padding: 20,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Bạn chưa có gì trong giỏ
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
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
  bottom: {
    width: '100%',
    marginTop: 15,
    marginBottom: 20,
  },
});
