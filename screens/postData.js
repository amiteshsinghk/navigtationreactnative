import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import postDummyApi from '../api/PostDummy';
import PostDummyCard  from '../Components/PostDummyCard'


export default function PostData({ navigation }){
    const[post, setPost ]= useState([]);

    function getPostDataFromAPI(){
        postDummyApi.get('posts')
            .then(function(response){
                console.log('response',response.data)
                setPost(response.data)
                console.log('post',post)
            })
            .catch(function(error){
                console.log(console.error)
            })
  
    }
    useEffect(()=>{
        getPostDataFromAPI()
    },[]);

    
    return(
        <View style={styles.container}>
          <FlatList
            data ={post}
            keyExtractor ={(item, index)=>'key'+index}
            renderItem ={({item}) =>{
              return(<TouchableOpacity onPress={() => 
                navigation.navigate('Update',{textData : item.id})
                }>
                <PostDummyCard item ={item} />
                </TouchableOpacity>)
     }}
          
          ></FlatList>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    // padding:10,
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
   
  },
});
