import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';


export default function TeamCard(){
   //render(){ 
    return(
    <View style={styles.container}>
    <Text style={styles.tittle}>NOME do TIME</Text>
    <Text style={styles.score}>Nome Completo</Text>
      <View style={styles.main}>
      <Image source={{uri:''}} style={styles.img}></Image>
      <Text style={styles.score}>SIGLA</Text>
    </View>
    <View style={styles.main}>
    <Text style={styles.score}>Cidade</Text>
    <Text style={styles.score}>Deliberação</Text>
    </View>
    <View style={styles.main}>
    <Text style={styles.score}>Divisão</Text>
    <Text style={styles.score}>Deliberação</Text>
    </View>
    <View style={styles.main}>
    <Text style={styles.score}>Deliberação</Text>
    <Text style={styles.score}>Deliberação</Text>
    </View>
    </View>
  );
 //}
}

const styles = StyleSheet.create({
    main:{
      flexDirection:"row",
      alignSelf:'center',
      opacity:0.9,
      paddingBottom:10,
      marginBottom:10,
      width:280,
    },
    vs:{
      color:'#FCA311',
      marginTop:20,
      fontSize:40,
    },
    ano:{
      color:'#FCA311',
      fontSize:20,
      marginTop:10
    },
    container: {
      backgroundColor:"#14213D",
    },
    tittle:{
      marginTop: 20,
      alignSelf:"center",
      color:"#FCA311",
    },
    score:{
      marginTop: 0,
      alignSelf:"center",
      color:"#FCA311",
      marginBottom:0
    },
    img:{
      width:70,
      height:70,
      alignSelf:'center'
    }
})