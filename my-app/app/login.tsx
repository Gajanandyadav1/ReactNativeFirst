import { StyleSheet,View, Text } from 'react-native'
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