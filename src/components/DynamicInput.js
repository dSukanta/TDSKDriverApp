import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input} from '@rneui/themed';

const DynamicInput = ({
  lefticon,
  placeholder,
  righticon,
  style,
  onChange,
  secureTextEntry,
}) => {
  return (
    <Input
      placeholder={placeholder || 'Enter a text'}
      leftIcon={lefticon || {type: 'font-awesome', name: 'comment'}}
      rightIcon={righticon || null}
      onChangeText={value => onChange(value)}
      secureTextEntry={secureTextEntry ? true : false}
      inputContainerStyle={styles.inputcontainerstyle}
      leftIconContainerStyle={styles.lefticonContainer}
      inputStyle={{fontSize:15}}
    />
  );
};

export default DynamicInput;

const styles = StyleSheet.create({
    inputcontainerstyle:{
        borderWidth: 1,
        borderColor:'black',
        paddingHorizontal:10,
        borderRadius:10,
        paddingLeft:0,
    },
    lefticonContainer:{
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
    }
});
