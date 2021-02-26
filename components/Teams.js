import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import api from './apis';
import axios from 'axios'

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:'https://ca.global.nba.com/media/img/teams/00/logos/'+item.abbreviation+'_logo.svg'}}  style={{width:60, height:60,borderRadius:30}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.full_name}>{item.full_name}</Text>
        <Text>{item.position}</Text>
      </View>      
    </View>
  );
}

export default class App extends React.Component {

    constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

 componentDidMount() {
    return fetch('https://www.balldontlie.io/api/v1/teams')
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
    const {players} = this.state;
    console.log({players});
    return (
           
           <ImageBackground style={styles.imgBG} source={require('../assets/wallpaper.png')}>
           <View style={styles.containerImg}>
    <Image source={require('../assets/Logo.png')} style={styles.image}></Image></View>
           <Text style={styles.title}>TIMES NBA</Text>
       <ScrollView>
       
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.id}
        />
       
      </ScrollView>
       </ImageBackground>
     
    );
  }
}

const styles = StyleSheet.create({
  imgBG: {
    flex:1,
  },
  title:{
  color:"#FCA311",
    textAlign:"center",
    fontSize: 40,
    marginTop:5,
    marginBottom:10,
    fontWeight:'bold'
  },
  name:{
      fontSize:20,
      color:'#14213D'
  },
  full_name:{
      marginTop:10,
      fontSize:10,
      color:'#14213D'
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FCA311",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5,
    opacity:0.9 
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