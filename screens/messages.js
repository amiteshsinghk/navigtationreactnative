import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button,FlatList } from 'react-native';
import NewsCard from "../Components/NewsCard";
import newsAPI from '../api/News'



export default function Messages() {
    // useEffect(() => {
    //     newsResponse()
    // }, [])
    // const newsResponse = async () => {
    //     const response = await newsAPI.get('top-headlines?country=us&apiKey=605a93fe087f48d69fe65d48e7d25c59')
    //     console.log('TagMc', response.data)
    //     debugger
    // }

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const [news, setNews] = useState([])

    // const getMovies = async () => {
    //    try {
    //     const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=605a93fe087f48d69fe65d48e7d25c59');
    //     const json = await response.json();
    //     setData(json);
    //     console.log('TagMc', data)
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    function getNewsFromAPI(){
        newsAPI.get('top-headlines?country=in&apiKey=605a93fe087f48d69fe65d48e7d25c59')
            .then(function(response){
                console.log(response.data.articles)
                setNews(response.data)
                console.log(news)
            })
            .catch(function(error){
                console.log(console.error)
            })
  
    }
  
    useEffect(() => {
    //   getMovies();
    getNewsFromAPI()
    }, []);

    return (
        <View>
            <FlatList data = {news.articles}
             keyExtractor ={(item, index) => 'key' + index}
             renderItem ={({item}) =>{
                        return <NewsCard item ={item}/>
             }}
            />
           

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