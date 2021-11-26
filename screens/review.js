import React from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Review({ route, navigation }) {
    const { textDes } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.textstyle}> {JSON.stringify(textDes)}</Text>
            <Button
                title="Go to About..."
                onPress={() => navigation.navigate('About')}
            // onPress={() => navigation.push('Home')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 35,
    },
    textstyle: {
        padding: 25
    }
});