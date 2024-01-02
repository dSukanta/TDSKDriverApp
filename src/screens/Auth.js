// AnimatedLoginScreen.js
import {Button} from '@rneui/themed';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import {Alert} from 'react-native';
import DynamicInput from '../components/DynamicInput';
import DynamicIcon from '../components/DynamicIcon';
import colors from '../constants/colors';

const AnimatedLoginScreen = ({route, navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  fadeIn(); // Trigger the fade-in animation when the component mounts

  const [inputData, setInputData] = useState({
    username: '',
    password: '',
  });
  const [visiblePassword, setVisiblePassword] = useState(false);

  // console.log(inputData,'inputData');

  const handleLogin = async () => {
    if (!inputData?.username) {
      return Alert.alert('Required', 'Please enter your username');
    }
    if (!inputData?.password) {
      return Alert.alert('Required', 'Please enter your password');
    }
    console.log(inputData, 'inputData');
    navigation.navigate('Home');
    return Alert.alert('Success', 'Login successful');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Animated.View style={{...styles.logoContainer, opacity: fadeAnim}}>
        <Image source={require('../images/app-icon.png')} style={styles.logo} />
        <Text style={styles.logoText}>Tenida's Kitchen Driver</Text>
      </Animated.View>

      <View style={styles.formContainer}>
        <DynamicInput
          placeholder={'Enter your username'}
          lefticon={{type: 'font-awesome', name: 'user'}}
          onChange={(text)=>setInputData({...inputData,username: text})}
        />
        <DynamicInput
          placeholder={'Enter your password'}
          lefticon={{type: 'fontisto', name: 'key'}}
          righticon={
            <TouchableOpacity
              onPress={() => setVisiblePassword(!visiblePassword)}>
              <DynamicIcon
                library={'materialcommunity'}
                name={visiblePassword ? 'eye' : 'eye-off'}
                size={20}
              />
            </TouchableOpacity>
          }
          secureTextEntry={visiblePassword ? false : true}
          onChange={(text)=>setInputData({...inputData,password: text})}
        />

        <Button
          title={'Login'}
          icon={{
            name: 'login',
            type: 'antdesign',
            size: 15,
            color: 'white',
          }}
          onPress={handleLogin}
          buttonStyle={{backgroundColor:colors.red, borderRadius:10}}
        />

        {/* <View style={styles.additionalOptionsContainer}>
          <TouchableOpacity>
            <Text style={styles.additionalOptionText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius:100,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  formContainer: {
    marginTop: 40,
    width: '80%',
  },
  loginButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  additionalOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  additionalOptionText: {
    color: '#3498db',
  },
});

export default AnimatedLoginScreen;
