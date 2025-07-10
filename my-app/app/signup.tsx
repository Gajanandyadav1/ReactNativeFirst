import {   Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react' 
import { useRouter } from 'expo-router'
import Mybutton from '@/components/Mybutton'

const Signup = () => {
    const router = useRouter()
    const Register =()=>{
        router.navigate('/login')
    } 

      const [value, setValue] = useState('');

  const handleChange = (text: string) => {
    // Sirf 0-9 digits allow kare, baaki hata de

    const onlyNumbers = text.replace(/[^0-9]/g, '');
    setValue(onlyNumbers);
  };
  return (
  <View style={styles.container}> 
     <Image source={require('../assets/images/Login.jpeg')} resizeMode='contain' style={styles.images}/>

          <TextInput placeholder='Enter Name' style={{borderWidth:1,height:50,paddingHorizontal:20, width:'90%', marginVertical:10, borderRadius:12}} onChangeText={(e)=> console.log(e)}/>
    
          <TextInput placeholder='Enter Email' style={{borderWidth:1,height:50, paddingHorizontal:20,width:'90%', marginVertical:10, borderRadius:12}} onChangeText={(e)=>console.log(e)}/>
 
          <TextInput
        placeholder="Enter Number"
        keyboardType="numeric"
        value={value}
        onChangeText={handleChange} maxLength={10}
        style={{
          borderWidth: 1,
          height: 50,
          paddingHorizontal: 20,
          width: '90%',
          marginVertical: 10,
          borderRadius: 12,
        }}
      />
    
          <TextInput placeholder='Enter Address '   style={{borderWidth:1,height:50, paddingHorizontal:20,width:'90%', marginVertical:10, borderRadius:12}}  onChangeText={(e)=>console.log(e)}/>
 
          <Mybutton title={'Register Button '} onPress={Register} />
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