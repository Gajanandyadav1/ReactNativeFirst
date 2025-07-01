import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const Login = () => {

  const router = useRouter()
  const LoginPress =  ()=>{
   router.navigate('/signup')
  }

  return (
    <View style={styles.container}>
    <MyButton title={'Login'} onPress={LoginPress} />
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

})