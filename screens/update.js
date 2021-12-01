import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput,Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import postDummyApi from '../api/PostDummy';

export default function Update({ route, navigation }){
    
    const { textData } = route.params;
    var dataR = JSON.stringify(textData)
    const [item, setPostItem] = useState([
    //     {
    //     "body": "", "id":"" , "title": " ", "userId":'' 
    // }
]);
    
    console.log('update', dataR)

    function getPostDataFromAPI(){
        postDummyApi.get('posts/'+dataR)
            .then(function(response){
                console.log('response',response.data)
                setPostItem(response.data)
                console.log('item',item)
            })
            .catch(function(error){
                console.log(console.error)
            })
  
    }
    useEffect(()=>{
        getPostDataFromAPI()
    },[]);

    function updatePostDataFromAPI(){
        postDummyApi.get('posts/'+dataR,{
            method: 'PUT',
            body :item,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
            .then(function(response){
                console.log('Updateresponse',response.data)
                alert('Response Status ' + response.status)
                debugger
            })
            .catch(function(error){
                console.log(console.error)
            })
  
    }

    return(
        <View style={styles.container}>
            <TextInput 
            style ={styles.tIStyle}   
              placeholder="Enter Text!"
              onChangeText={text => {
                  item.title = text
                  setPostItem(item)
              }}
              multiline={true}
              defaultValue={item.title}
            />
            <TextInput
              style ={styles.tIStyle}    
              placeholder="Enter Text!"
              onChangeText={text => {
                  item.body = text
                  setPostItem(item)
                }}
              multiline={true}
              defaultValue={item.body}
            
            />
             <Button title = "Submit" 
            //  onPress ={getEditTextData}
            
            onPress={() => {
                updatePostDataFromAPI()
                // navigation.navigate('Review',{textDes : text})
            }}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
   
},
textstyle:{
    padding : 25
},
tIStyle:{
  //  height:45,
    margin:25,
    borderWidth : 1,
    borderColor:'#777',
    padding:5,
   
  }
});


