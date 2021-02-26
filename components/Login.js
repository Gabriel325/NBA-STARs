import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { useFonts, RubikMonoOne } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,createAppContainer } from '@react-navigation/stack';
import Navigation from '../components/Body';



// or any pure javascript modules available in npm
const image = {require:'../assets/Login.png'};


function Login({navigation}) {
  return (
    <ImageBackground source={require('../assets/Login.png')} style={styles.BGImg}> 
    <View style={styles.container}>
    //<Image></Image> 
    <TextInput style={styles.textBoxEmail} placeholder=" Email"/>
    <TextInput secureTextEntry={true} style={styles.textBoxSenha} placeholder=" Senha"/>
    <TouchableOpacity style={styles.EMSButon}><Text style={styles.EMS}>Esqueci Minha Senha</Text></TouchableOpacity>
    <View style={styles.button}>
      <TouchableOpacity style={styles.entrar} 
      onPress={() =>navigation.navigate('Navigation')}><Text style={styles.entrarText}>Entrar</Text></TouchableOpacity>
      </View>
      <View style={styles.button}>
      <TouchableOpacity 
      style={styles.cadastrar} onPress={() => navigation.navigate('Cadastrar')}>
      <Text style={styles.cadastrarText}>Casdastrar
      </Text></TouchableOpacity> 
      </View> 
    </View>
    </ImageBackground>
  );
}

function Cadastrar({navigation}) {
  return (
    <ImageBackground source={require('../assets/wallpaper.png')} style={styles.BGImg}> 
    <View style={styles.container}>
    <Text style={styles.title}>CRIAR SUA <br/> CONTA</Text>
    <Text style={styles.textCadastro}>Email</Text>
    <TextInput style={styles.textBoxCadastro} placeholder=" Email"/>
    <Text style={styles.textCadastro}>Senha</Text>
    <TextInput secureTextEntry={true} style={styles.textBoxCadastro} placeholder=" Senha"/>
    <Text style={styles.textCadastro}>Confirmar Senha</Text>
    <TextInput secureTextEntry={true} style={styles.textBoxCadastro} placeholder=" Confirmar Senha"/>
      <Text style={styles.Aceitar}>Aceito os Termos e Condicoes</Text>
      <View style={styles.button}>
      <TouchableOpacity style={styles.entrarCad}><Text style={styles.entrarText}>Casdastrar</Text></TouchableOpacity>
            <View style={styles.button}>
      <TouchableOpacity 
      style={styles.cadastrar} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.cadastrarText}>Voltar
      </Text></TouchableOpacity> 
      </View>  
      </View> 
    </View>
    </ImageBackground>
  );
}

const Stack = createStackNavigator();
export default function Navitegation(){
    let [fontsLoaded] = useFonts({
   RubikMonoOne,
  });
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  title:{
    color:"#FCA311",
    textAlign:"center",
    fontSize: 40,
    fontFamily:RubikMonoOne,
    marginTop:5,
    marginBottom:10
  },
  EMS:{
    color:"#FFF",
    textAlign: "center",
  },
  EMSButon:{
     marginTop:40,
    marginBottom:15,
    width:140,
    alignSelf:"center",
  },
  Aceitar:{
    color:'#fff',
    alignSelf:"center",
    marginTop:5
  },
  textBoxEmail:{
    height:40,
    width: 250,
    color:"#fff",
    borderWidth:1,
    borderColor: '#fff',
    borderRadius:5,
    marginTop:180,
    alignSelf:"center"
    
  },
  textBoxSenha:{
    height:40,
    width: 250,
    color:"#fff",
    borderWidth:1,
    borderColor: '#fff',
    borderRadius:5,
    marginTop:10,
    alignSelf: "center"    
  },
  textCadastro:{
    color:"#fff",
    marginLeft:35,
    marginTop: 10,
    marginBottom:2
  },
  textBoxCadastro:{
    height:40,
    width: 250,
    color:"#fff",
    borderWidth:1,
    borderColor: '#fff',
    borderRadius:5,
    alignSelf: "center"    
  },
  cadastrar: {
    padding:10,
    backgroundColor:"#14213D",
    alignItems: "center",
    borderRadius:5,
  },
  cadastrarText:{
    color:"#FCA311",
  },
  entrar: {
    padding:10,
    backgroundColor:"#FCA311",
    alignItems: "center",
    borderRadius:5
  },
  entrarCad: {
    padding:10,
    backgroundColor:"#FCA311",
    alignItems: "center",
    borderRadius:5,
    marginTop:10
  },
  entrarText:{
    color:"#14213D",
  },
  BGImg:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button:{
    marginTop:10,
    width:250,
    alignSelf:"center"
  },
});