/* eslint-disable react/jsx-key */
import {   FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
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
  <ScrollView  showsVerticalScrollIndicator={false}> 
  {/* <View style={styles.container}> 
     <Image source={require('../assets/images/Login.jpeg')} resizeMode='contain' style={styles.images}/>

          <TextInput placeholder='Enter Name' style={{borderWidth:1,height:50,paddingHorizontal:20, width:'90%', marginVertical:10, borderRadius:12}} onChangeText={(e)=> console.log(e)}/>
          <TextInput placeholder='Enter Email' style={{borderWidth:1,height:50, paddingHorizontal:20,width:'90%', marginVertical:10, borderRadius:12}} onChangeText={(e)=>console.log(e)}/>
          <TextInput placeholder='Enter Email' style={{borderWidth:1,height:50, paddingHorizontal:20,width:'90%', marginVertical:10, borderRadius:12}} onChangeText={(e)=>console.log(e)}/>
          <TextInput placeholder='Enter Email' style={{borderWidth:1,height:50, paddingHorizontal:20,width:'90%', marginVertical:10, borderRadius:12}} onChangeText={(e)=>console.log(e)}/>
          <TextInput placeholder='Enter Email' style={{borderWidth:1,height:50, paddingHorizontal:20,width:'90%', marginVertical:10, borderRadius:12}} onChangeText={(e)=>console.log(e)}/>
  
          <TextInput  placeholder="Enter Number"   keyboardType="numeric"
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
         </View> */}


         {/* {
          [
            1,2,3,4,5,6,7,8,9,2
          ].map((item)=>{
            return(
                 <View  style={{width:100, height:100, backgroundColor:'red', margin:30}}>

                 </View>
            )
          })
         } */}


 {/* <FlatList
  data={[1,2,3]}
  contentContainerStyle={{marginTop:40}}
  numColumns={3}
  renderItem={({ item }) => (
    <View style={{ width: 100, height: 100, backgroundColor: 'red', marginBottom: 30, marginRight:20, justifyContent:'center', alignItems:'center', borderRadius:20 }}>
      <Text style={{color:'white'}}>{item}</Text>
    </View>
  )}
/> */}

    <FlatList 
  data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,]}
  contentContainerStyle={{marginTop: 40}}
  numColumns={3}
  renderItem={({item}) => { 

    return (
      <View style={{
        backgroundColor: 'blue' ,
        width: 100,
        height: 100,
        margin: 12,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{color: 'white', textAlign: 'center'}}>{item}</Text>

        {/* Blue View inside red box */}
       
      </View>
    )
  }}
/>


         </ScrollView>
  )
} 
export default Signup

const styles = StyleSheet.create({
  container:{
     
    justifyContent:'center', alignItems:'center',
    color:'red',
    marginBottom:40

  },
  images:{
    width:'100%',
    // height:200,
    borderRadius:40, borderColor: 'red',
    marginTop:50
  },
   
  text: {
    color: '#fff',
    fontSize: 20,
  },
})