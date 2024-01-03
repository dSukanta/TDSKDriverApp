import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import DynamicIcon from '../components/DynamicIcon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screens/Profile';
import colors from '../constants/colors';
import Orders from '../screens/Orders';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: '10%',
          paddingVertical: 5,
          paddingBottom: 7,
          backgroundColor:'#000'
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.red,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <DynamicIcon
              library={'materialcommunity'}
              name="home-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <DynamicIcon
              library={'materialcommunity'}
              name="room-service"
              color={color}
              size={size}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <DynamicIcon
              library={'fontawesome'}
              name="user-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
