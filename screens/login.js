import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function LogIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');

    const getEditTextData = () => {
        console.log("TagMcTex", email)
        console.log("TagMcPass", pass)
    }

    const goToSignUp = () => {
        navigation.navigate('SignUp')
    }

    const validateTextField =() =>{
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!email.trim()  || !re.test(email)){
            alert('Please enter valid email.');
            return;
        }
        if(!pass.trim()){
            alert('Please enter password.');
            return;
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.tIStyle}
                placeholder="Enter Email!"
                onChangeText={email => setEmail(email)}
                defaultValue={email}
            />
            <TextInput
                style={styles.tIStyle}
                placeholder="Enter Pass!"
                onChangeText={pass => setpass(pass)}
                defaultValue={pass}
            />
            <Button title="Submit"
                onPress={() => {
                    // console.log('TagMc', text)
                    // navigation.navigate('Review',{textDes : text})
                    getEditTextData()
                    validateTextField()
                }}
            />
            <View style={styles.viewsignup}>
                <Text style={styles.signup} onPress={() => {
                    goToSignUp()
                }} >Signup</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        padding: 35,
    },
    tIStyle: {
        height: 45,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#777',
        padding: 5,

    },
    signup: {
        alignContent: "flex-end",
        fontSize: 12,
    },
    viewsignup: {
        marginTop: 10,
        alignItems: "flex-end",
    }
});