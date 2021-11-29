import React from "react";
import { View, StyleSheet,Text, Image, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const NewsCard =({}) =>{
    return(
        <View style = {styles.cardView}>
            {/* <Text>News Card</Text> */}
            <Text style ={styles.title}>Ghislaine Maxwell's sex-trafficking trial begins Monday. Prosecutors allege she created a network of underage victims for the late Jeffrey Epstein - CNN</Text>
                <Text style ={styles.author}>Lauren del Valle, CNN</Text>
                <Image style ={styles.image}/>
                <Text style ={styles.description}>The public will get a glimpse into the life of the late Jeffrey Epstein as the sex-trafficking trial of his longtime companion Ghislaine Maxwell gets underway.</Text>
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
        width:width,
        height:height/6,
        marginLeft:width*0.05,
        marginRight: width*0.05,
        marginVertical : height*0.02
    },
    author:{
        marginVertical : height *0.03,
        marginHorizontal : height *0.015,
        fontSize:15,
        color:'lightGray'

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