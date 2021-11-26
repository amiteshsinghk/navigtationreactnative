import React from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

export default function About({ navigation }) {
    // const { textDes } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.textstyle}>About</Text>
            <Button
                title="Use popUpTo"
                onPress={() => navigation.popToTop()}
            // onPress={() => navigation.push('Home')}
            />

            <View style={styles.buttonstyle}>
                <Button style={styles.buttonstyle} title="Go to Home using navigate" onPress={() => navigation.navigate('Home')} />
            </View>

            <View style={styles.buttonstyle}>
                <Button style={styles.buttonstyle} title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 35,
        justifyContent: "space-between"
    },
    textstyle: {
        padding: 25
    },
    buttonstyle: {
        marginTop: 25
    }
});