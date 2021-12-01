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
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Review from './screens/review';
import About from './screens/about';
import Messages from './screens/messages';
import LogIn from './screens/login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './screens/feed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import SignUp from './screens/signup';
import PostData from './screens/postData';
import Update from './screens/update';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

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
      <Stack.Screen name="Review" component={Review} options={{
        headerShown: false
      }} />
      <Stack.Screen name="About" component={About} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Feed" component={HomeStackScreen} />
      <Drawer.Screen name="Messages" component={Messages} />
    </Drawer.Navigator>
  );
}

function logInNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogIn} options={{
        headerShown: true
      }} />

      <Stack.Screen name="SignUp" component={SignUp} options={{
        headerShown: true
      }} />


    </Stack.Navigator>
  );
}
function postNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Post" component={PostData} options={{
        headerShown:true
      }}/>
      <Stack.Screen name="Update" component={Update} options={{
        headerShown:true
      }}/>
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'News') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 18
        }
      })}
    >
      <Tab.Screen name="Feed" component={HomeStackScreen}

        options={{ tabBarBadge: 2, headerShown: true }} Ionicons />
      <Tab.Screen name="News" component={Messages} />
      <Tab.Screen name="Login" component={logInNavigator} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Post" component={postNavigator} options={{
        headerShown: false
      }} />


    </Tab.Navigator>
  );
}


const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={TabNavigator} options={{
          headerShown: false,
          title: 'My Home',
          // headerRight: () => (
          // <Button
          //   onPress={() => }
          //   title="Info"
          //   color="#fff"
          // />
          // ),
        }}
        />
        <Stack.Screen name="Feed" component={DrawerNavigator} options={{
          headerShown: false,
          title: 'feed'
        }} />





      </Stack.Navigator>
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
      {/* <Tab.Navigator
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
          options={{ tabBarBadge: 2, }} />
        <Tab.Screen name="Messages" component={Messages} />
       
       
      </Tab.Navigator> */}


    </NavigationContainer>
    //     // <Home/>
  );
};

// const App: () => Node = () => {
//   return (
//     <NavigationContainer>
//         <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Feed" component={HomeStackScreen} />
//         <Drawer.Screen name="Messages" component={Messages} />
//       </Drawer.Navigator>

//     </NavigationContainer>
//   );
// };

export default App;
