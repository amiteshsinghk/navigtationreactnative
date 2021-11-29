import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
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
  
    const getMovies = async () => {
       try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=605a93fe087f48d69fe65d48e7d25c59');
        const json = await response.json();
        setData(json.articles);
        console.log('TagMc', response)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getMovies();
    }, []);

    return (
        <View>
            
            <NewsCard></NewsCard>

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