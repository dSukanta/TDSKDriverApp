import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Tab} from '@rneui/themed';
import DynamicIcon from '../components/DynamicIcon';
import {globalStyles} from '../constants/globalStyles';
import colors from '../constants/colors';
import {Button, Card} from '@rneui/base';

const Orders = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orderItems = [
      {
        id: 1,
        name: 'Dinner',
        image: 'https://shorturl.at/uvCLY',
        address: 'abc,xyz,123456',
        orderid: 'TDK123456',
        amount: '300',
        quantity: 3,
        modeofPayment: 'COD',
        status: 'active',
      },
      {
        id: 2,
        name: 'Lunch',
        image: 'https://shorturl.at/ehHQX',
        address: 'abc,xyz,123456',
        orderid: 'TDK123556',
        amount: '200',
        quantity: 1,
        modeofPayment: 'UPI',
        status: 'completed',
      },
      {
        id: 3,
        name: 'Snacks',
        image: 'https://shorturl.at/oLTXY',
        address: 'abc,xyz,123456',
        orderid: 'TDK123666',
        amount: '100',
        quantity: 2,
        modeofPayment: 'COD',
        status: 'completed',
      },
    ];
    activeIndex === 0
      ? setOrders(orderItems.filter((order, i) => order.status === 'active'))
      : setOrders(
          orderItems.filter((order, i) => order.status === 'completed'),
        );
  }, [activeIndex]);

  const tabs = [
    {
      id: 0,
      title: 'Current orders',
      icon: (
        <DynamicIcon
          library={'materialcommunity'}
          name={'bus-clock'}
          size={20}
          color={'white'}
        />
      ),
    },
    {
      id: 1,
      title: 'Completed orders',
      icon: (
        <DynamicIcon
          library={'materialcommunity'}
          name={'truck-check'}
          size={20}
          color={'white'}
        />
      ),
    },
  ];

  return (
    <View style={globalStyles.container}>
      <View>
        <FlatList
          scrollEnabled
          horizontal
          data={tabs}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 10,
                borderBottomWidth: activeIndex === index ? 3 : 0,
                borderColor: colors.red,
              }}
              onPress={() => setActiveIndex(index)}>
              {item.icon}
              <Text style={globalStyles.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
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
                  <Text
                    style={{
                      padding: 10,
                      paddingVertical: 5,
                      backgroundColor:
                        order.status === 'active'
                          ? colors.red
                          : colors.deepGreen,
                      borderRadius: 10,
                      color: 'white',
                    }}>
                    {order.status}
                  </Text>
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

export default Orders;

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
