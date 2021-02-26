import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,ImageBackground } from 'react-native';

const image = {uri: "https://img2.gratispng.com/20180130/ehq/kisspng-nba-basketball-player-athlete-basketball-player-5a705ddc4d4228.5531758615173135003165.jpg"}

export default function Login() {
    return(
        <View styles={styles.backgroundColor}>
            <ImageBackground source={image}>
            <Text>BEM-VINDO NBA STARS</Text>
            <Button styles={styles.button}><Text>Entrar</Text></Button>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundColor:{
        backgroundColor: "#FCA311",
    },
    button:{
        backgroundColor: "#14213d",
        color:"#FCA311",
    },
    BGImage:{
        width: 100,
    }
});