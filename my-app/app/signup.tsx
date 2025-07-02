import {   StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const Signup = () => {
    const router = useRouter()
    const Register =()=>{
        router.navigate('/login')
    } 

  return (
  <View style={styles.container}>
    <MyButton title={'Register Page '} onPress={Register} />
    </View>
  )
} 
export default Signup

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center', alignItems:'center',
    color:'red'
  },
})
 