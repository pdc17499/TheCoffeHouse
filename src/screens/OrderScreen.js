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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useState} from 'react';

const DATA2 = [
  {
    title: 'Thùng 24 Lon Cà Phê Sữa Đá',
    des: 'Ưu đãi Thùng 24 lon Cà phê sữa đá giá còn 289,000đ. Nhập mã: CPSD289 (Áp dụng Giao Tận Nơi & Tự Đến Lấy).Hãy để Cà phê sữa đá Nhà thơm ngon đậm vị đồng hành cùng nhịp sống sôi nổi của tuổi trẻ, cho bạn một ngày làm việc đầy hứng khởi',
    price: '336.000',
    uri: 'https://product.hstatic.net/1000075078/product/lon-park24_10572efcaba3475d84d6fb0a859a56f0_large.jpg',
  },
  {
    title: 'Cà Phê Sữa Đá Hòa Tan',
    des: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói -  Cà phê uống liền từ 119k (Áp dụng Giao tận nơi và Tự đến lấy).Bắt đầu ngày mới với ly cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin, hoà quyện với vị ngọt béo của sữa, giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả. Mỗi hộp gồm 10 gói cà phê 22gram.',
    price: '70.000',
    uri: 'https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg',
  },
  {
    title: 'Cà Phê Peak Flavor',
    des: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói -  Cà phê uống liền từ 119k (Áp dụng Giao tận nơi và Tự đến lấy). Quy cách: Gói 350gr  Được rang dưới nhiệt độ vàng, Cà phê Peak Flavor - Hương Thơm Đỉnh Cao lưu giữ trọn vẹn hương thơm tinh tế đặc trưng của cà phê Robusta Đăk Nông và Arabica Cầu Đất. Hương thơm nhiều cung bậc lan tỏa cho bạn đầy cảm hứng.',
    price: '55.000',
    uri: 'https://product.hstatic.net/1000075078/product/peak_196fc2433ab14ef297113696e4d6c179_large.jpg',
  },
];

const DATA3 = [
  {
    title: 'Cà Phê Sữa Đá',
    des: 'Cà phê phin kết hợp cũng sữa đặc là một sáng tạo đầy tự hào của người Việt, được xem món uống thương hiệu của Việt Nam.',
    price: '60.000',
    uri: 'https://product.hstatic.net/1000075078/product/cafe-sua-da_9073dfe2143d428a91a370e79df77e49_master.jpg',
  },
  {
    title: 'CARAMEL MACCHIATO',
    des: 'Vị thơm béo của bọt sữa và sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng, và vị ngọt đậm của sốt caramel.',
    price: '50.000',
    uri: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-nong_667b90cf1e20493899e6727ae8c1b071_master.jpg',
  },
  {
    title: 'AMERICANO',
    des: 'Americano được pha chế bằng cách thêm nước vào một hoặc hai shot Espresso để pha loãng độ đặc của cà phê, từ đó mang lại hương vị nhẹ nhàng, không gắt mạnh và vẫn thơm nồng nàn.',
    price: '99.000',
    uri: 'https://product.hstatic.net/1000075078/product/americano-da_7495646eaad24b8cbe0e68e8e479f01f_master.jpg',
  },
];

const DATA1 = [
  {
    title: 'SINH TỐ VIỆT QUẤT',
    des: 'Mứt Việt Quất chua thanh, ngòn ngọt, phối hợp nhịp nhàng với dòng sữa chua bổ dưỡng. Là món sinh tố thơm ngon mà cả đầu lưỡi và làn da đều thích.',
    price: '59.000',
    uri: 'https://product.hstatic.net/1000075078/product/sinh-to-viet-quoc_75c00683e2aa4b8eb10e2b0d0e568a0c_master.jpg',
  },
  {
    title: 'PHÚC BỒN TỬ CAM ĐÁ XAY',
    des: 'Sự kết hợp hài hoà giữa những nguyên liệu mộc mạc rất đỗi quen thuộc đối với người Việt cho một thức uống thanh mát, giải nhiệt lại tốt cho sức khoẻ.',
    price: '60.000',
    uri: 'https://product.hstatic.net/1000075078/product/cam-pbt-da-xay_06ca55fce8e84389ab9d707f4bd753a7_master.jpg',
  },
  {
    title: 'COOKIES ĐÁ XAY',
    des: 'Những mẩu bánh cookies giòn rụm kết hợp ăn ý với sữa tươi và kem tươi béo ngọt, đem đến cảm giác lạ miệng gây thích thú. Một món uống phá cách dễ thương.',
    price: '79.000',
    uri: 'https://product.hstatic.net/1000075078/product/cookie-da-xay_43c2bc99f313405aa253b803dcd59030_master.jpg',
  },
];

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
          <Text style={styles.title}>{item.title}</Text>
          <Text
            style={{
              height: 40,
              color: '#4F4F4F',
              marginBottom: 5,
              marginRight: 5,
              fontSize: 16,
            }}>
            {item.des}
          </Text>
          <Text style={{fontSize: 16}}>{item.price} đ</Text>
        </View>

        <View style={styles.img}>
          <Image
            style={{flex: 1, borderRadius: 10, overflow: 'hidden'}}
            source={{uri: item.uri}}
          />
        </View>
      </View>
    );
  };
  const [text, onChangeText] = useState('Đá Xay - Chocolate - Matcha');
  return (
    <SafeAreaView
      style={{marginHorizontal: 15, backgroundColor: 'grey ', flex: 1}}>
      <View style={{flexDirection: 'row', marginVertical: 15}}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
            Đá Xay - Chocolate - Matcha
          </Text>
        </View>

        <View>
          <FlatList
            nestedScrollEnabled={true}
            data={DATA1}
            renderItem={renderItem}
            keyExtractor={item => item.title}
          />
          <View>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
              Cà Phê
            </Text>
          </View>

          <FlatList
            nestedScrollEnabled={true}
            data={DATA3}
            renderItem={renderItem}
            keyExtractor={item => item.title}
          />

          <View>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
              Cà Phê Gói - Cà Phê Uống Liền
            </Text>
          </View>
          <FlatList
            nestedScrollEnabled={true}
            data={DATA2}
            renderItem={renderItem}
            keyExtractor={item => item.title}
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
