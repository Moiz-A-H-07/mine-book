import React from 'react';
import{View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native';

export default class FirstScreen extends React.Component{



  render(){
    return(
      <View style={{ backgroundColor:"black",flex:1}}>



<Text style={{
  marginTop:50,
  marginLeft:150,
  fontSize:20,
  color:'yellow'
}}> hello </Text>


      <Image style={{
        width:250,
        height:250,
        marginTop:70,
        marginLeft:45,
        
      }} source={require('../assets/download.png')}  />

      <TouchableOpacity style={styles.nextButton}
      onPress={()=>{
        this.props.navigation.navigate('text')
      }} >
      <Text> next </Text>
      </TouchableOpacity>


      </View>
    )
  }
}


const styles=StyleSheet.create({
  nextButton:{
    width:200, height:40, alignItems:'center', justifyContent:'center', borderWidth:1, borderRadius:10, marginTop:30 , backgroundColor:'yellow',marginLeft:70
  }
})
