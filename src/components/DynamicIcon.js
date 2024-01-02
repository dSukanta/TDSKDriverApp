import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const iconLibraries = {
  antdesign: AntDesign,
  entypo: Entypo,
  evilicon: EvilIcons,
  feather: Feather,
  fontawesome: FontAwesome,
  fontawesome5: FontAwesome5,
  fontawesome6: FontAwesome6,
  fontisto: Fontisto,
  foundation: Foundation,
  ionicon: Ionicons,
  materialcommunity: MaterialCommunityIcons,
  materialicons: MaterialIcons,
  octicon: Octicons,
  simpleline: SimpleLineIcons,
  zocial: Zocial,
};

const DynamicIcon = ({ library, name, size, color }) => {
  const IconComponent = iconLibraries[library];

  if (!IconComponent) {
    console.error(`Invalid icon library: ${library}`);
    return null;
  }

  return (
    <View>
      {name && size && (
        <IconComponent name={name} size={size || 20} color={color || 'black'} />
      )}
    </View>
  );
};

export default DynamicIcon;
