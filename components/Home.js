import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground, Button, TouchableOpacity, Image, FlatList } from 'react-native';
import Constants from 'expo-constants';
import Item from './Home-Card/Card-Teams';
import FontCooper from '../assets/cooperhewitt-heavyitalic.otf';
const image = {require:'../assets/wallpaper.png'};
import axios from 'axios'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

 componentDidMount() {
    return fetch('https://www.balldontlie.io/api/v1/games')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          { 
            isLoading: false,
            data:responseJson.data
            
            
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  render(){
  const {games} = this.state;
    console.log({games});
  return (
    <View style={styles.container}>
    <ImageBackground style={styles.imgBG} source={require('../assets/wallpaper.png')}>
    <View style={styles.containerImg}>
    <Image source={require('../assets/Logo.png')} style={styles.image}></Image>
    </View>
      <Text style={styles.tittle}>Temporada <br/> de 2018</Text><FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.id}
        />
      </ImageBackground>
    </View>
  );
}
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#14213D",
    },
    tittle:{
      alignSelf:"center",
      color:"#FCA311",
      textAlign:"center",
    fontSize: 30,
    marginTop:5,
    marginBottom:10,
    fontWeight:'bold'
    },
    imgBG:{
      flex:1
    },
    containerImg:{
      backgroundColor:"#14213D",
      height:60,
      width:"100%",
      paddingBottom:10,
      opacity:0.8
    },
    image:{
      width:"30%",
      height:"100%",
      marginTop:10,
      alignSelf:"center"
    }
});