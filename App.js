import React from 'react'
import {View,Text,StyleSheet.create} from 'react-native'

const Lotsofstyle=()=>{
  return(
    <View style={{marginTop:50}}>
      <TexT style={{color:'red'}}>Hello</TexT>
      <Text style={style.bigblue}>Big Blue</Text>
      <Text style={{color:'red'}}>Big Bike and Big Too</Text>
      <Text style={style.bigblue}>Big Too and Big Bike</Text>
    </View>
  )
}

const style=StyleSheet.create ({
  container:{
    marginTop:50,
    alignItems:'center',
  },
  bigBlue:{
    color:'bluee',fontSize:30,fontWeight:'bold'
  }
})
export default Lotsofstyle