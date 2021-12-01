import React from "react";
import { View, StyleSheet,Text, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const PostDummyCard =({item}) =>{
    return(
        <View style = {styles.cardView}>
            {/* <Text>News Card</Text> */}
            <Text style ={styles.title}>User Id: {item.userId}</Text>
                <Text style ={styles.author}>{item.id}</Text>
                <Text style ={styles.author}>{item.title}</Text>
                <Text style ={styles.description}>{item.body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView:{
        margin:10,
        backgroundColor : 'white',
        borderRadius:15
    },
    title:{
            width: width,
            marginHorizontal:width*0.03,
            marginVertical : width* 0.03,
            color:'black',
            fontSize : 18,
            fontWeight: 'bold'
            
    },
    author:{
        marginVertical : height *0.03,
        marginHorizontal : height *0.015,
        fontSize:15,
        color:'grey'

    },
    description:{
        width: width,
        paddingHorizontal:width*0.02,
        // marginHorizontal : width*0.0005,
        // marginLeft:width*0.01,
        // marginRight:width*0.,
        marginVertical:width*0.03,
        color:'grey',
        fontSize : 17
    }
})

export default PostDummyCard