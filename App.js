/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Review from './screens/review';
import About from './screens/about';
import Messages from './screens/messages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './screens/feed';
import Ionicons from 'react-native-vector-icons/Ionicons';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Home" component={Home} options={{
          title: 'My Home',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#77f0ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Review" component={Review} options ={{
          headerShown: false
        }} />
        <Stack.Screen name="About" component={About} options ={{
          headerShown: false
        }}/>
    </Stack.Navigator>
  );
}


const App: () => Node = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{
          title: 'My Home',
          headerStyle: {
            backgroundColor: '#77f0ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator> */}
        <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'caret-back' : 'arrow-back-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name="Feed" component={HomeStackScreen}
        options ={{tabBarBadge : 2,}} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    </NavigationContainer>
    // <Home/>
  );
};
export default App;
