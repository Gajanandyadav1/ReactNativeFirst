import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Mybutton = ({title,onPress})  =>  {
  return (
    <View style={styles.main1}>
      
      <TouchableOpacity style={styles.button} >
        <Text style={{ color: 'white' }} onPress={onPress}> {title}</Text>
      </TouchableOpacity>
    </View>
  );
}; 
export default Mybutton; 

const styles = StyleSheet.create({ 
  button: {
    backgroundColor: 'red',
    
    width: '100%',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center', paddingVertical:15 , 
  },

  title:{
    width:'100%',
    color:'white',textAlign:'center'
  },

  main1:{
    width:'90%',
    textAlign:'center'
  }
});
