import React from "react";
import { View, StyleSheet,Text, Image, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const NewsCard =({item}) =>{
    return(
        <View style = {styles.cardView}>
            {/* <Text>News Card</Text> */}
            <Text style ={styles.title}>{item.title}</Text>
                <Text style ={styles.author}>{item.author}</Text>
                <Image style ={styles.image} source={{uri: item.urlToImage}}/>
                <Text style ={styles.description}>{item.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView:{
        backgroundColor : 'white',
        margin: 5,
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
    image:{
        height:height/6,
        marginLeft:width*0.05,
        marginRight: width*0.05,
        marginVertical : height*0.02
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

export default NewsCard