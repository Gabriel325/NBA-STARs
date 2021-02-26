import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import api from './apis';
import axios from 'axios'

function Item({ item }) {
  return (
      <View style={styles.main}>
      <View style={styles.row1}>
        <Text style={styles.name}>{item.first_name}</Text>
        <Text style={styles.name}>{item.last_name}</Text>
        </View>
        <View style={styles.row2}>
<Image style={styles.team}  source={{uri:'https://ca.global.nba.com/media/img/teams/00/logos/'+item.team.abbreviation+'_logo.svg'}}></Image>
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
    return fetch('https://www.balldontlie.io/api/v1/players')
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
           <Text style={styles.title}>JOGADORES NBA</Text>
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
  main:{
    flexDirection:'row',
    alignItens:"center",
     margin:10,
    padding:10,
    backgroundColor:"#14213D",
    width:"80%",
    flex:1,
    alignSelf:"center",
    borderRadius:5, 
    opacity: 0.8
  },
  imgBG: {
    flex:1
  },
  name:{
    textAlign:"left",
    fontWeight:"bold",
    color:"#FCA311"
  },
  team:{
    height:50,
    width:50,
    alignSelf:"center"
  },
  row1:{
    alignItems:"center",
    width:"50%",
    color:"#FCA311"
  },
  row2:{
    alignItens:"center",
    width:"50%"
  },
  title:{
  color:"#FCA311",
    textAlign:"center",
    fontSize: 35,
    marginTop:5,
    marginBottom:10,
    fontWeight:'bold'
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