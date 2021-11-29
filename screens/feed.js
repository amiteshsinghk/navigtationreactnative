import React from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./home";
import Review from "./review";
import About from "./about";



const Stack = createNativeStackNavigator();
export default function Feed() {
    // const Stack = createNativeStackNavigator();
    return (
        // <View style={styles.container}>
        //     <Text style={styles.textstyle}> Feed</Text>

        // </View>
        <NavigationContainer>

            <Stack.Navigator>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: 35,
    },
    textstyle: {
        padding: 25
    }
});