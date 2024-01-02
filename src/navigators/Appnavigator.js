import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Auth from '../screens/Auth';
import TabNavigator from './TabNavigator';
import OrderDetails from '../screens/OrderDetails';
import Ratings from '../screens/Ratings';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}}/>
      <Stack.Screen name="OrderDetails" component={OrderDetails} options={{headerShown:false}}/>
      <Stack.Screen name="Ratings" component={Ratings} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;