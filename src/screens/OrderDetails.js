import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../constants/globalStyles';
import {Card} from '@rneui/base';

const OrderDetails = ({route, navigation}) => {
  const {order} = route?.params;

  console.log(order, 'ord');

  return (
    <View style={globalStyles.container}>
        <Text style={[globalStyles.text,{fontSize:15,alignSelf:'center',margin:10}]}>Order Details</Text>
      <View style={styles.cardStyle}>
        <View style={{flex:1}}>
          <Text style={globalStyles.text}>OrderId: {order.orderid}</Text>
          <Text style={globalStyles.text}>Title</Text>
          <Text style={globalStyles.text}>Price: ₹ {order.amount}</Text>
          <Text style={globalStyles.text}>Mode of Payment: {order.modeofPayment} </Text>
          <Text style={globalStyles.text}>Quantity:{order.quantity}</Text>
        </View>
        <View>
          <Image source={{uri: order?.image}} style={{width:100,height:100, resizeMode:'cover'}}/>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
    cardStyle:{
        flexDirection:'row',
        padding:10
    }
});
