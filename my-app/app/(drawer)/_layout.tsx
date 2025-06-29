 
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
  return (
       <GestureHandlerRootView>
        <Drawer>
            <Drawer.Screen  name='index'/>
            <Drawer.Screen  name='about'/>
            <Drawer.Screen  name='profile'/>
        </Drawer>
        </GestureHandlerRootView>

  )
}

export default _layout