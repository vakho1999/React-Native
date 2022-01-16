import React, {  useEffect, useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView, TextInput,Pressable,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [number, onChangeNumber] = useState(null);
  const [data, setData] = useState([]);
  const storeData = async () => {
    try {
      
      let value = await AsyncStorage.getItem('arrayNum')
      
      if(value !== null) {
        value =  JSON.parse(value)
        value.push(number)
        setData(value)
        await AsyncStorage.setItem('arrayNum',JSON.stringify(value))
      }
      else{
        setData( [number] )
        await AsyncStorage.setItem('arrayNum', JSON.stringify([number]))
        }
       
    } catch (error) {
     console.log(error) 
    }
  };
  useEffect( async () => {
    const value = await AsyncStorage.getItem('arrayNum')
    if ( value !== null ) {
      setData( JSON.parse(value) )
    }

   
  },[])

  const inputvalidationSet = (number)=>{
    // console.log(number)
    if (isNaN(number)) {
      alert('Entered Value NOT is Number.');
     
    }
    else if( number < 1 || number > 99 ){
      alert('Entered Value is equal or greater then 100 or less then 1');

    }
    else{
      onChangeNumber(number)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
    
    <TextInput
      style={styles.input}
      onChangeText={inputvalidationSet}
      value={number}
      placeholder="enter Number between 1 - 100"
      keyboardType="numeric"
    />
       <Pressable style={styles.button} onPress={()=>storeData()}>
        <Text style={styles.text}>add</Text>
      </Pressable>
    <ScrollView>
    {
        data.map((item,idx)=>{
          return <View key={idx} style={styles.item} >
          <Text >inputed number: {item}</Text>
       
        </View>
        })
    }
    </ScrollView>
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    shadowColor: '#8a2be2',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  item: {
    borderRadius: 10,
  backgroundColor: '#5d8aa8',
  height: 60,
  justifyContent: 'center',
  marginVertical: 8,
  marginHorizontal: 16,
  padding: 20,
},
});
