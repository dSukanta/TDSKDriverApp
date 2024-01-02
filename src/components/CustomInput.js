import React, {useState, useEffect} from 'react';
import {View, TextInput, Animated, StyleSheet} from 'react-native';

const FloatingLabelInput = ({label, defaultVal, edit = false,onChange, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [animation] = useState(new Animated.Value(props.value ? 1 : 0));
  const [inputValue,setInputValue] = useState('');

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isFocused || props.value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, props.value]);

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 0],
    }),
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', 'blue'],
    }),
  };


  return (
    <View style={styles.container}>
      {(!defaultVal && !inputValue) && <Animated.Text style={labelStyle}>{label}</Animated.Text>}
      <TextInput
        {...props}
        style={[styles.input, {borderColor: isFocused ? 'blue' : 'grey', color: !edit? 'black':'grey'}]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        defaultValue={defaultVal}
        keyboardType={props?.keyboardType || 'default'}
        maxLength={props?.limit || 50}
        onChangeText={(text)=>{setInputValue(text);onChange(text)}}
        secureTextEntry={props?.secureTextEntry? true: false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    fontSize: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 15,
    color:"#000",
    paddingHorizontal:10
  },
});

export default FloatingLabelInput;