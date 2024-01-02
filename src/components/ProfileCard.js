import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../constants/globalStyles';
import {Card} from '@rneui/base';

const {height, width} = Dimensions.get('window');

const ProfileCard = () => {
  return (
    <Card containerStyle={styles.card}>
      <View style={{flexDirection: 'row',gap:10}}>
        <View style={{flex: 0.6}}>
          <Image source={require('../images/app-icon.png')} style={styles.imageStyle} />
        </View>
        <View style={{flex: 1,justifyContent:'center'}}>
          <Text>Name</Text>
          <Text>email@email.com</Text>
        </View>
      </View>
    </Card>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    width: width / 1.1,
    height: height / 7,
    borderRadius: 10,
    alignSelf: 'center',
    margin: 0,
    padding: 0,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
