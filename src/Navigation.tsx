import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/Home";
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Button from "./comopnents/Button";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopColor: 'rgba(255,255,255,0.3)',
          },
          tabBarActiveTintColor: '#fff'
        }}
      >
        <Tab.Screen 
          name="Home" 
          options={{
            tabBarIcon: ({ size, color }) => (
              <EntypoIcons name='home' size={size} color={color} />
            )
          }} 
          component={HomeScreen} />
        <Tab.Screen 
          name="Discover" 
          options={{
            tabBarIcon: ({ size, color }) => (
              <FeatherIcons name='search' size={size} color={color} />
            )
          }} 
          component={HomeScreen} 
        />
        <Tab.Screen 
          name="New" 
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => (
              <Button />
            )
          }} 
          component={HomeScreen} 
        />
        <Tab.Screen 
          name="Inbox" 
          options={{
            tabBarIcon: ({ size, color }) => (
              <EntypoIcons name='chat' size={size} color={color} />
            )
          }} 
          component={HomeScreen} 
        />
        <Tab.Screen 
          name="Profile" 
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntIcons name='user' size={size} color={color} />
            )
          }} 
          component={HomeScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
