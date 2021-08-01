
import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import TouchList from './Components/TouchList/TouchList';
import MoldalList from './Components/ModalList/ModalList';
import ModalList from './Components/ModalList/ModalList';
import baba from './assets/baba.jpg';




export default function App() {

 const [ newPlaceText, SetnewPlaceText] = useState("");
 const [placeList, setplaceList] = useState([]);
 const [ModalData, setModalData] = useState(null)


const searchKey = key =>{
  const place = placeList.find(place=>{
    return(
      place.key === key
    )
    
  })
  setModalData(place)
}

let placeModel = null
if(ModalData !== null) {
  placeModel = <ModalList placeData= {ModalData} placeList={placeList} />
}
  

  return (
    <View style={styles.container}>
      <Text>Ubar Clone</Text>

    <View>
    {placeModel}
    </View>
    <View style={{
     
      flexDirection:'row',
      justifyContent:'space-between',

    }}>

    
     
      
    <TextInput style={styles.InputBoxDesign}
      
      onChangeText = {text => SetnewPlaceText(text)}
      value={newPlaceText}
      />

      <Button 
      title="Add Place"

      onPress={() =>{
        if(newPlaceText !==""){
          setplaceList([...placeList, {
            key:Math.random().toString(), 
            value:newPlaceText,
           image:baba
          
          }])
          SetnewPlaceText("")
        }
      }}
      />
    </View>

    <FlatList
    data= {placeList}
    renderItem = {(info) =>{
      return(

        <TouchList placeName={info.item.value} onItempressed={() =>searchKey(info.item.key)}/>
       
      )
      
    }}
    
    
    />
    
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:10,
  },

  InputBoxDesign : {
    backgroundColor:"#eee",
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:"gray",
    margin:5,
    
  }
});
