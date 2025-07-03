import { StyleSheet,View, Text, TextInput } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'

const Login = () => {

  const router = useRouter()
  const LoginPress =  ()=>{
   router.navigate('/signup')
  }

  return (
    <View style={styles.container}>
    
      <Image source={require('../assets/images/Login.jpeg')} style={styles.images}/>


      <TextInput placeholder='Enter Name' style={{borderWidth:1,height:50,paddingHorizontal:20, width:'80%', marginVertical:20, borderRadius:12}} onChangeText={(e)=> console.log(e)}/>

      <TextInput placeholder='Enter Password'  style={{borderWidth:1,height:50, paddingHorizontal:20,width:'80%', marginVertical:20, borderRadius:12}}/>
    <MyButton title={'Login '} onPress={LoginPress} />
    </View>
  )
}


export default Login
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center', alignItems:'center',
    color:'red'
  },
  images:{
    width:200,
    height:200,
    borderRadius:40, borderColor: 'red',
  }
})