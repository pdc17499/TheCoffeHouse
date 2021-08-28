import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
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
              marginBottom: 20,
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

        <View style={styles.coupon}>
          <View style={styles.img}>
            <Image
              style={{flex: 1, borderRadius: 10, overflow: 'hidden'}}
              source={{
                uri: 'https://feed.thecoffeehouse.com/content/images/2019/08/Artboard-1-1.png',
              }}
            />
          </View>
          <View style={styles.item}>
            <Text
              style={{
                height: 40,
                color: '#4F4F4F',
                marginBottom: 5,
                marginRight: 5,
                fontSize: 16,
              }}>
              Giảm 50% tối đa 40K cho đơn hàng 2 ly size lớn nhất áp dụng
              Delivery
            </Text>
            <Text style={{fontSize: 16, color: 'orange', marginTop: 20}}>
              Hết hạn trong 2 ngày
            </Text>
          </View>
        </View>

        <View style={styles.coupon}>
          <View style={styles.img}>
            <Image
              style={{flex: 1, borderRadius: 10, overflow: 'hidden'}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8k1gdyJKwUf4C0x-A_ZdIEl0wa4paUpWug&usqp=CAU',
              }}
            />
          </View>
          <View style={styles.item}>
            <Text
              style={{
                height: 40,
                color: '#4F4F4F',
                marginBottom: 5,
                marginRight: 5,
                fontSize: 16,
              }}>
              Giảm 10% tổng bill cho đơn hàng CPG từ 119k áp dụng Delivery
            </Text>
            <Text style={{fontSize: 16, color: 'orange', marginTop: 20}}>
              Hết hạn trong 5 ngày
            </Text>
          </View>
        </View>
        <View style={styles.coupon}>
          <View style={styles.img}>
            <Image
              style={{flex: 1, borderRadius: 10, overflow: 'hidden'}}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
          </View>
          <View style={styles.item}>
            <Text
              style={{
                height: 40,
                color: '#4F4F4F',
                marginBottom: 5,
                marginRight: 5,
                fontSize: 16,
              }}>
              Giảm 25% cho 01 bánh bất kì cho đơn hàng có 01 ly nước
            </Text>
            <Text style={{fontSize: 16, color: 'orange', marginTop: 20}}>
              Hết hạn trong 3 ngày
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            marginHorizontal: 15,
          }}>
          <Text style={{marginLeft: 5, fontSize: 20, fontWeight: 'bold'}}>
            Đổi ưu đãi
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
        <View style={styles.getCoupon}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{borderRadius: 10, height: 70, width: '20%'}}
              source={{
                uri: 'https://cf.shopee.vn/file/48a953fe152cd79fb72766431adc71dd',
              }}
            />
            <View style={{marginLeft: 20, width: '60%', height: 40}}>
              <Text style={styles.title}>PNJ</Text>
              <Text style={{fontSize: 16, marginRight: 15}}>
                Voucher 200,000đ tại PNJ (áp dụng cho khách hàng mới ){' '}
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.point}>
                <Text style={{color: '#00CD00', fontWeight: 'bold'}}>99</Text>
              </View>
              <Text style={{marginTop: 5, color: 'grey'}}>BEAN</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#D3D3D3',
              borderBottomWidth: 1,
              marginVertical: 15,
            }}
          />

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{borderRadius: 10, height: 70, width: '20%'}}
              source={{
                uri: 'https://cf.shopee.vn/file/8a26b5c8d546af1e0966f97fb436efae',
              }}
            />
            <View style={{marginLeft: 20, width: '60%'}}>
              <Text style={styles.title}>PNJ</Text>
              <Text style={{fontSize: 16}}>Voucher 300,000đ tại PNJ</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.point}>
                <Text style={{color: '#00CD00', fontWeight: 'bold'}}>199</Text>
              </View>
              <Text style={{marginTop: 5, color: 'grey'}}>BEAN</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: '#D3D3D3',
              borderBottomWidth: 1,
              marginVertical: 15,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{borderRadius: 10, height: 60, width: '20%'}}
              source={{
                uri: 'http://img.giftpop.vn/brand/FLOWERSTORE/MP2003030002_BASIC_origin.jpg',
              }}
            />
            <View style={{marginLeft: 20, width: '60%'}}>
              <Text style={styles.title}>FLOWERSTORE</Text>
              <Text style={{fontSize: 16}}>
                Cash Voucher 50,000đ tại Flowerstore
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.point}>
                <Text style={{color: '#00CD00', fontWeight: 'bold'}}>69</Text>
              </View>
              <Text style={{marginTop: 5, color: 'grey'}}>BEAN</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#D3D3D3',
              borderBottomWidth: 1,
              marginVertical: 15,
            }}
          />

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{borderRadius: 10, height: 70, width: '20%'}}
              source={{
                uri: 'https://cf.shopee.vn/file/b6981110f328f0b96bfb51d02eccdbc3',
              }}
            />
            <View style={{marginLeft: 20, width: '60%'}}>
              <Text style={styles.title}>FLOWERSTORE</Text>
              <Text style={{fontSize: 16}}>
                Voucher 100,000đ tại Flowerstore
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.point}>
                <Text style={{color: '#00CD00', fontWeight: 'bold'}}>99</Text>
              </View>
              <Text style={{marginTop: 5, color: 'grey'}}>BEAN</Text>
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
  img: {
    flex: 1,
    height: '100%',
    width: '80%',
  },
  item: {
    flex: 2,
    marginLeft: 30,
  },
  coupon: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 5,
    marginHorizontal: 15,
    marginTop: 5,
  },

  getCoupon: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
  },
  point: {
    height: 30,
    width: 45,
    borderColor: '#9AFF9A',
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9AFF9A',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',

    color: 'gray',
  },
});
