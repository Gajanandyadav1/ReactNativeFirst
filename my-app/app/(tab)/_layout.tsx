import { View,  } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {AntDesign, FontAwesome ,} from '@expo/vector-icons' 

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{title:"Home", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>,}}/>
        <Tabs.Screen name='about'  options={{title:"About Us", tabBarIcon:({color})=>{
            return(
                <View style={{
                    width:60,
                    height:60,
                    borderRadius:50,
                    backgroundColor:"red",
                    bottom:20, justifyContent:'center', alignItems:'center'
                }}>
<AntDesign size={28} name="contacts"  style={{color:'white'}}/> 
                </View>
            )
        }}}/>
        <Tabs.Screen name='profile'  options={{title:"Profile",  tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle-o"  style={{color:'blue'}}/>}}/>
    </Tabs>
  )
}

export default _layout