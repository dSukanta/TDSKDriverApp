import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ProfileCard from '../components/ProfileCard';
import {ListItem} from '@rneui/base';
import DynamicIcon from '../components/DynamicIcon';
import {globalStyles} from '../constants/globalStyles';
import { Alert } from 'react-native';

const {height, width} = Dimensions.get('window');

const Profile = ({route,navigation}) => {
  const listOptions = [
    {
      id: 1,
      title: 'Name of Employee',
      icon: <DynamicIcon library={'antdesign'} name={'user'} size={20} color={'white'}/>,
    },
    {
      id: 2,
      title: 'Employee Id',
      icon: <DynamicIcon library={'antdesign'} name={'idcard'} size={20} color={'white'}/>,
    },
    {
      id:3,
      title: 'Ratings',
      icon: <DynamicIcon library={'antdesign'} name={'staro'} size={20} color={'white'}/>,
      onPress:()=> navigation.navigate('Ratings')
    },
    {
      id: 4,
      title: 'Logout',
      icon: <DynamicIcon library={'antdesign'} name={'logout'} size={20} color={'white'}/>,
      onPress:()=> Alert.alert('Confirm','Are you sure you want to log out?',[
        {
          text:'Yes',
          onPress:()=> Alert.alert('Success','Logout successful.')
        },
        {
          text:'No'
        }
      ])
    },
  ];

  return (
    <View style={globalStyles.container}>
      <View style={styles.upperContainer}>
        <Image
          source={{uri: 'https://shorturl.at/efmIO'}}
          style={styles.imageStyle}
        />
      </View>
      <View>
        {listOptions.map((item, i) => (
          <TouchableOpacity onPress={item?.onPress? item.onPress: null} disabled={!item.onPress} key={i} style={styles.listContainer}>
          <ListItem bottomDivider containerStyle={{backgroundColor:'transparent'}}>
            {item.icon? item.icon: null}
            <ListItem.Content>
            <ListItem.Title style={[globalStyles.text,{fontSize:16}]}>{item.title}</ListItem.Title>
            <Text style={globalStyles.text}>{item.title}</Text>
            </ListItem.Content>
          </ListItem>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  upperContainer: {
    width: width,
    height: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: width / 3,
    height: width / 3,
    borderRadius: width / 3,
    resizeMode: 'cover',
  },
  listContainer:{
    width: width/1.2,
    alignSelf: 'center',
  }
});
