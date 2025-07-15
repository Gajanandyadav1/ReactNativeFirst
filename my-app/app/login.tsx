import { StyleSheet,View, Text, TextInput, Button, Pressable } from 'react-native'
import Modal from 'react-native-modal';
import React, { useState } from 'react' 
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'
import Mybutton from '@/components/Mybutton'

const Login = () => {
  const [modalVisible, setModalVisible] = useState(false);
const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const router = useRouter()
  const LoginPress =  ()=>{
   router.navigate('/signup')
   console.log(value, value1)
  }

  return (
    <View style={styles.container}> 
      <Image source={require('../assets/images/Login.jpeg')} style={styles.images} />

      <TextInput placeholder=' Enter your Name' style={{borderWidth:1,height:50,paddingHorizontal:20, width:'80%', marginVertical:20, borderRadius:12}} onChangeText={(e)=> setValue(e)}/>

      <TextInput placeholder='Enter your Password'  style={{borderWidth:1,height:50, paddingHorizontal:20,width:'80%', marginVertical:20, borderRadius:12}} onChangeText={(e)=>setValue1(e)}/>
    <Mybutton title={'Login '} onPress={LoginPress}  />

     <View style={styles.container2}>
       

      <Pressable style={styles.button2} onPress={() => setOpen(true)}>
  <Text style={styles.btnTxt}>Open Modal</Text>
</Pressable>
      

      <Modal
        isVisible={open}
        onBackdropPress={() => setOpen(false)}   // बाहर tap से बंद
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Hello  Gajanand Yadav 👋</Text>
          <Button title="Close" onPress={() => setOpen(false)} />
        </View>
      </Modal>
    </View>

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
  },
  box:   { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modal: { backgroundColor: '#fff', padding: 20, borderRadius: 10 },
  title: { fontSize: 18, marginBottom: 12, textAlign: 'center' },
  container2:{marginTop:50},
  button2: {
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  btnTxt: { color: '#fff', fontSize: 16 },
})