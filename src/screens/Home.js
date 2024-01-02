import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from '@rneui/base';
import {ListItem, Card} from '@rneui/themed';
import colors from '../constants/colors';
import DynamicIcon from '../components/DynamicIcon';
import ProfileCard from '../components/ProfileCard';
import {globalStyles} from '../constants/globalStyles';

const {height, width} = Dimensions.get('window');

const Home = ({route, navigation}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([
      {
        id: 1,
        name: 'Dinner',
        image: 'https://shorturl.at/uvCLY',
        address: 'abc,xyz,123456',
        orderid: 'TDK123456',
        amount:'300',
        quantity:3,
        modeofPayment:'COD',
        status:'active',
      },
      {
        id: 2,
        name: 'Lunch',
        image: 'https://shorturl.at/ehHQX',
        address: 'abc,xyz,123456',
        orderid: 'TDK123556',
        amount:'200',
        quantity:1,
        modeofPayment:'UPI',
        status:'completed',
      },
      {
        id: 3,
        name: 'Snacks',
        image: 'https://shorturl.at/oLTXY',
        address: 'abc,xyz,123456',
        orderid: 'TDK123666',
        amount:'100',
        quantity:2,
        modeofPayment:'COD',
        status:'active'
      },
    ]);
  }, []);

  return (
    <View style={globalStyles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
          paddingHorizontal: 15,
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <DynamicIcon
          library={'entypo'}
          name={'home'}
          color={'black'}
          size={20}
        />
        <Button
          title={'Login'}
          icon={{
            name: 'login',
            type: 'antdesign',
            size: 20,
            color: 'white',
          }}
          onPress={() => navigation.navigate('Auth')}
          containerStyle={{borderRadius: 10}}
          buttonStyle={{backgroundColor: colors.red}}
        />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {orders && orders.length ? (
          orders.map((order, i) => (
            <Card key={i} containerStyle={styles.card}>
              <Card.Image
                source={{uri: order.image}}
                style={styles.imageStyle}
              />
              <View style={styles.bottomSection}>
                <View>
                  <Text
                    style={[globalStyles.text, {fontSize: 15, color: 'black'}]}>
                    Order : {order.orderid}
                  </Text>
                  <Text style={[globalStyles.text, {color: 'black'}]}>
                    {' '}
                    address: {order.address}
                  </Text>
                </View>
                <View>
                  <Button
                    title={'View Details'}
                    buttonStyle={{borderRadius: 10}}
                    onPress={() =>
                      navigation.navigate('OrderDetails', {
                        order: order,
                      })
                    }
                  />
                </View>
              </View>
            </Card>
          ))
        ) : (
          <View>
            <Text>No Orders available</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    margin: 0,
    padding: 0,
    borderRadius: 10,
    marginVertical: 10,
  },
  imageStyle: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});
