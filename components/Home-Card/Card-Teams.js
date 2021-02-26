import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';


export default function CardTeam({ item }){
  return(
    <View style={styles.main}>
    <View style={styles.container}>
      <Image source={{uri:'https://ca.global.nba.com/media/img/teams/00/logos/'+item.home_team.abbreviation+'_logo.svg'}} style={styles.img}></Image>
      <Text style={styles.tittle}>{item.home_team.name}</Text>
      <Text style={styles.score}>{item.home_team_score}</Text>
    </View>
    <View>
    <Text style={styles.ano}>{item.season}</Text>
    <Text style={styles.vs}>VS</Text>
    </View>
    <View style={styles.container}>
      <Image source={{uri:'https://ca.global.nba.com/media/img/teams/00/logos/'+item.visitor_team.abbreviation+'_logo.svg'}} style={styles.img}></Image>
      <Text style={styles.tittle}>{item.visitor_team.name}</Text>
      <Text style={styles.score}>{item.visitor_team_score}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
      flexDirection:"row",
      alignSelf:'center',
      backgroundColor:"#FCA311",
      opacity:0.9,
      paddingBottom:10,
      marginBottom:10,
      width:280,
      borderRadius:15, 
    },
    vs:{
      color:'#14213D',
      marginTop:20,
      fontSize:40,
    },
    ano:{
      color:'#14213D',
      fontSize:20,
      marginTop:10
    },
    container: {
      marginTop:30,
      backgroundColor:'',
      width: 130,
      height: 150,
      borderRadius: 15,
      marginLeft:-10,
    },
    tittle:{
      marginTop: 20,
      alignSelf:"center",
      color:"#14213D",
      fontWeight:"bold",
      fontSize:16
    },
    score:{
      marginTop: 0,
      alignSelf:"center",
      color:"#14213D",
      marginBottom:0,
      fontWeight:"bold",
      fontSize:30,
    },
    img:{
      width:70,
      height:70,
      alignSelf:'center'
    }
});