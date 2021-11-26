import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }){
    const [text, setText] = useState('');

    const getEditTextData = () =>{
          console.log("TagMc",text)
          navigation.navigate
         
       
        // console.log('TagMc', itmesList )
    }

    return(
        <View style={styles.container}>
            {/* <Text style ={styles.textstyle}>Home Screen</Text> */}
            <TextInput 
            style ={styles.tIStyle}
              
              // style={{height: 40}}      
              placeholder="Enter Text!"
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
             <Button title = "Submit" 
            //  onPress ={getEditTextData}
            
            onPress={() => {
                console.log('TagMc', text)
                navigation.navigate('Review',{textDes : text})}}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    padding:35,
},
textstyle:{
    padding : 25
},
tIStyle:{
    height:45,
    margin:25,
    borderWidth : 1,
    borderColor:'#777',
    padding:5,
   
  }
});


