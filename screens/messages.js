import React from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Messages() {
    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Messages!</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 35,
    },
    textstyle: {
        padding: 25
    }
});