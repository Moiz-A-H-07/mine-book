import React from 'react';
import{View,Image,StyleSheet,Text,TextInput,TouchableOpacity,Linking,Button,TouchableHighlight,FlatList} from 'react-native';
import db from '../config';
import firebase from 'firebase'
import {BookSearch} from 'react-native-google-books'

export default class TextScreen extends React.Component{
  constructor(){
    super()
    this.state={
      author:'',
      bookName:'wings of fire',
      datasource:'',
     showFlatlist:false
    }
  }

async getbooksfromapi(bookName){
this.setState({
  bookName:bookName
  
})

if(bookName.length<2){
 var books=await BookSearch.searchbook(bookName,'AIzaSyB0cgILToRwaZFh9djkMXfURPHbL6kZ7s8')
  }

  this.setState({
datasource:books.data(),
showFlatlist:true
  })
}

addbookinfo=async(bookName)=>{
  var books=await BookSearch.searchbook(bookName,'AIzaSyB0cgILToRwaZFh9djkMXfURPHbL6kZ7s8')
  db.collection('books').add({
    author:this.state.author,
    bookName:this.state.bookName
  })
  return alert("info add")
}


renderitem=({
  item,i
})=>{
  let obj={
    title:item.volumeinfo.title,
    selfLink:item.selfLink,
    buylink:item.saleInfo.buylink
  }

return(
<TouchableHighlight syle={{alignItems:"center",backgroundColor:"blue",padding:10,width:'19%'}} activeOpacity={0.6} underlayColor="blue" onPress={()=>{
  this.setState({
    showFlatlist:false,
    bookName:item.volumeinfo.title
  })
}} BottomDivider >
<Text> {item.volumeinfo.title}</Text>
</TouchableHighlight>
)

}

render(){
  return(
    <View style={styles.container}>


    



<TextInput style={styles.textinput}
placeholder="book name"
onChangeText={text=>this.getbooksfromapi(text)}
onClear={text=>this.getbooksfromapi('')} 
value={this.state.bookName} />

{  this.state.showFlatlist ?

        (  <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        enableEmptySections={true}
        style={{ marginTop: 10 }}
        keyExtractor={(item, index) => index.toString()}
      /> )
      :(

<TextInput style={styles.textinput}
placeholder="author"
onChangeText={text=>{
  this.setState({
    author:text,
  })
}}  />
      )}

<TouchableOpacity  style={styles.button}  title="NHL Scores Site" onPress={() => 
window.open("//" +  "google.com/search?q=" +this.state.bookName+"rating" , '_blank')}>

</TouchableOpacity>

    </View>

//{this.addbookinfo}
  )
}

}


const styles = StyleSheet.create({ container:{ 
  flex:1, 
  backgroundColor:'#F8BE85', 
  alignItems: 'center', 
  justifyContent: 'center'}, 
  
  textinput:{ 
    width:"75%", 
    height:35, 
    alignSelf:'center', 
    borderColor:'#ffab91', 
    borderRadius:10, 
    borderWidth:1,
     marginTop:20, 
     padding:10 
     }, 
     button:{ 
       width:200, 
       height:40, 
       alignItems:'center', 
       justifyContent:'center', 
       borderWidth:1, 
       borderRadius:10, 
       marginTop:30 
     }})