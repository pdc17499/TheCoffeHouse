import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {SliderBox} from 'react-native-image-slider-box';

const HomeScreen = () => {
  return (
    <ScrollView styles={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.block}>
          <View
            style={{
              marginLeft: 5,
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: '#FFE4B5',
              justifyContent: 'center',
            }}>
            <FontAwesome5
              style={{alignSelf: 'center'}}
              color="orange"
              name={'shipping-fast'}
              size={25}></FontAwesome5>
          </View>

          <Text style={{}}>Giao hàng</Text>
        </View>
        <View
          style={{borderWidth: 1, height: '80%', borderColor: 'gray'}}></View>
        <View style={styles.block}>
          <View
            style={{
              // marginLeft: 5,
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: '#FFE4B5',
              justifyContent: 'center',
            }}>
            <MaterialCommunityIcons
              style={{alignSelf: 'center', marginLeft: 4}}
              color="orange"
              name={'coffee-to-go'}
              size={33}></MaterialCommunityIcons>
          </View>

          <Text>Mang đi</Text>
        </View>
      </View>
      <SliderBox
        images={[
          require('../images/01.webp'),

          require('../images/02.webp'),
          require('../images/04.webp'),
        ]}
        ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
        sliderBoxHeight={200}
        dotColor="orange"
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 15,
          marginHorizontal: 10,
          padding: 0,
          margin: 0,
        }}
      />
      <View style={{marginTop: 20, marginLeft: 20, flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', marginRight: 10, fontSize: 18}}>
          Khám phá thêm{' '}
        </Text>
        <MaterialCommunityIcons
          color="orange"
          name={'star-four-points'}
          size={20}></MaterialCommunityIcons>

        <MaterialCommunityIcons
          color="orange"
          name={'star-four-points'}
          size={10}></MaterialCommunityIcons>
        <MaterialCommunityIcons
          color="orange"
          name={'star-four-points'}
          size={14}></MaterialCommunityIcons>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 15, marginLeft: 20}}>
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
          }}>
          <Text style={{color: 'orange', fontWeight: 'bold'}}>
            Ưu đãi đặc biệt
          </Text>
        </View>
        <View
          style={{
            height: 35,
            width: 120,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
          }}>
          <Text style={{fontWeight: 'bold'}}>Cập nhật từ Nhà</Text>
        </View>

        <View
          style={{
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
          }}>
          <Text style={{fontWeight: 'bold'}}>#CoffeeLover</Text>
        </View>
      </View>

      {/* Start 2 image */}

      <View style={{flexDirection: 'row', marginRight: 15}}>
        <View style={styles.image0}>
          <Image style={styles.image1} source={require('../images/03.webp')} />
          <View>
            <Text style={styles.title}>
              Ưu Đãi Tháng 8, Nhập Mã Giảm Giá CPG10
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <EvilIcons name={'calendar'} size={30}></EvilIcons>
              <Text style={{marginLeft: 10, alignSelf: 'center'}}>18/08</Text>
            </View>
          </View>
        </View>
        <View style={styles.image0}>
          <Image style={styles.image2} source={require('../images/05.webp')} />
          <View>
            <Text style={styles.title}>Thất Tịch Có Đôi, Nhà Mời Một Nửa</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <EvilIcons name={'calendar'} size={30}></EvilIcons>
              <Text style={{marginLeft: 10, alignSelf: 'center'}}>20/08</Text>
            </View>
          </View>
        </View>
      </View>

      {/* End of 2 image */}

      {/* Start 2 image */}

      <View style={{flexDirection: 'row', marginRight: 15}}>
        <View style={styles.image0}>
          <Image style={styles.image1} source={require('../images/08.webp')} />
          <View>
            <Text style={styles.title}>
              Ưu Đãi Tháng 9, Nhập Mã Giảm Giá CPG09
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <EvilIcons name={'calendar'} size={30}></EvilIcons>
              <Text style={{marginLeft: 10, alignSelf: 'center'}}>15/09</Text>
            </View>
          </View>
        </View>
        <View style={styles.image0}>
          <Image style={styles.image2} source={require('../images/09.webp')} />
          <View>
            <Text style={styles.title}>Măm Măm Bánh Ngon - Giá Còn 1 Nửa</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <EvilIcons name={'calendar'} size={30}></EvilIcons>
              <Text style={{marginLeft: 10, alignSelf: 'center'}}>22/09</Text>
            </View>
          </View>
        </View>
      </View>

      {/* End of 2 image */}

      {/* Start 2 image */}

      <View style={{flexDirection: 'row', marginRight: 15, marginBottom: 15}}>
        <View style={styles.image0}>
          <Image style={styles.image1} source={require('../images/06.webp')} />
          <View>
            <Text style={styles.title}>
              Cuối Tháng Vẫn Vui Vẻ, DEAL 40% Từ Nhà!
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <EvilIcons name={'calendar'} size={30}></EvilIcons>
              <Text style={{marginLeft: 10, alignSelf: 'center'}}>17/09</Text>
            </View>
          </View>
        </View>
        <View style={styles.image0}>
          <Image style={styles.image2} source={require('../images/07.webp')} />
          <View>
            <Text style={styles.title}>Ở Nhà Vui Khỏe - Gọi Món Tận Nơi</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <EvilIcons name={'calendar'} size={30}></EvilIcons>
              <Text style={{marginLeft: 10, alignSelf: 'center'}}>22/12</Text>
            </View>
          </View>
        </View>
      </View>

      {/* End of 2 image */}
    </ScrollView>
  );
};

const {height, width} = Dimensions.get('window');
const itemWidth = width / 2;

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    height: 90,
    borderRadius: 10,
  },
  block: {
    flex: 1,
    marginLeft: 70,
  },

  image0: {
    height: 280,
    width: itemWidth,
    marginLeft: 15,
    marginBottom: 5,
    flex: 1,
  },

  image1: {
    height: 200,
    width: '100%',
    marginVertical: 5,
    borderRadius: 15,
  },
  image2: {
    borderRadius: 15,
    height: 200,
    width: '100%',
    marginRight: 15,
    marginVertical: 5,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
