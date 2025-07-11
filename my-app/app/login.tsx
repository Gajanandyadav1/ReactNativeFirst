import { StyleSheet,View, Text, TextInput } from 'react-native'
import React, { useState } from 'react' 
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'
import Mybutton from '@/components/Mybutton'

const Login = () => {

  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const router = useRouter()
  const LoginPress =  ()=>{
   router.navigate('/signup')
   console.log(value, value1)
  }

  return (
    <View style={styles.container}> 
      <Image source={require('../assets/images/Login.jpeg')} style={styles.images}/>

      <TextInput placeholder='Enter your Name' style={{borderWidth:1,height:50,paddingHorizontal:20, width:'80%', marginVertical:20, borderRadius:12}} onChangeText={(e)=> setValue(e)}/>

      <TextInput placeholder='Enter your Password'  style={{borderWidth:1,height:50, paddingHorizontal:20,width:'80%', marginVertical:20, borderRadius:12}} onChangeText={(e)=>setValue1(e)}/>
    <Mybutton title={'Login '} onPress={LoginPress}  />

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