import * as React from 'react';
import { Ionicons, Foundation, FontAwesome,Octicons,SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { StyleSheet} from 'react-native';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import Sair from './Login';
export default function MyTabs() {
  return (
    <Tab.Navigator style={styles.tab}
    
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Foundation
                  name={'home'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Players') {
              return (
                <Octicons
                  name={'person'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Teams') {
              return (
                <FontAwesome
                  name={'group'}
                  size={size}
                  color={color}
                />
              );
          }else if (route.name === 'Sair') {
              return (
                <SimpleLineIcons
                  name={'logout'}
                  size={size}
                  color={color}
                />
              );
          }
          }   
          }
        )}
        tabBarOptions={{
          activeTintColor: '#FCA311',
          inactiveTintColor: 'gray',
          style:{
          backgroundColor: '#14213D',
          marginTop:-1,
          }
        }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Players" component={Players} />
      <Tab.Screen name="Teams" component={Teams} />
    </Tab.Navigator>
  );
}

/*function Sair(){
  
}*/

const styles = StyleSheet.create({
  tab:{
    backgroundColor:"#14213D",
    borderColor:"#14213D",
    borderWidth:1
    
  },
});