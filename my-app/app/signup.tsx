import {   Image, StyleSheet, Text, TextInput, View } from 'react-native'
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


     <Image source={require('../assets/images/Login.jpeg')} resizeMode='contain' style={styles.images}/>
    
    
          <TextInput placeholder='Enter Name' style={{borderWidth:1,height:50,paddingHorizontal:20, width:'90%', marginVertical:10, borderRadius:12}} onChangeText={(e)=> console.log(e)}/>
    
          <TextInput placeholder='Enter Email'  style={{borderWidth:1,height:50, paddingHorizontal:20,width:'90%', marginVertical:10, borderRadius:12}}/>

          <TextInput placeholder='Enter Mobile'  style={{borderWidth:1,height:50, paddingHorizontal:20,width:'90%', marginVertical:10, borderRadius:12}}/>
    
          <TextInput placeholder='Enter Password'  style={{borderWidth:1,height:50, paddingHorizontal:20,width:'90%', marginVertical:10, borderRadius:12}}/>
    
          <TextInput placeholder='Enter Address '  style={{borderWidth:1,height:50, paddingHorizontal:20,width:'90%', marginVertical:10, borderRadius:12}}/>
 
    <MyButton title={'Register Button '} onPress={Register} />
    </View>
  )
} 
export default Signup

const styles = StyleSheet.create({
  container:{
     
    justifyContent:'center', alignItems:'center',
    color:'red'
  },
  images:{
    width:'100%',
    // height:200,
    borderRadius:40, borderColor: 'red',
    marginTop:50
  }
})