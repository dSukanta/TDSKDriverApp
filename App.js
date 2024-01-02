import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import AppNavigator from './src/navigators/Appnavigator'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  },[]);

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})