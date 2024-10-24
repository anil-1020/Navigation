import { useNavigation, useRoute } from "@react-navigation/native"
import {  useContext, useState } from "react"
import { View,Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import AntDesign from '@expo/vector-icons/AntDesign';
import { mycontext } from "../App";
 

export const Product=()=>{
 
    const bnmcontext = useContext(mycontext);

const nav = useNavigation();
const route = useRoute();
const[select,setSelect]=useState(0);
 const isim = route.params.name;
 const rakam = route.params.num;
 

const data =Array(9).fill(null).map((_,i)=> ( {
    number:i
 }))

 const SendToContext=()=>{
bnmcontext.arr.isim = isim;
bnmcontext.arr.num = rakam;
 
 }


    return(
    
        <View style={styles.container_1}>

 <FlatList
 
 data={data}
 numColumns={3}
 renderItem={({_,index}) => {return(

    <TouchableOpacity onPress={()=> {setSelect(index + 1), SendToContext() }}> 
<View style={styles.container_2} >
    <Image style={{width:100,height:100}} source={require(`./cat.jpg`)} />
    <Text style={{fontSize:32}}>{index + 1}</Text>
</View>
</TouchableOpacity>
 )}
 
 }
                              />

<View style={{flexDirection:`row`}}>
    <Text style={{marginBottom:60,fontSize:28,color:`red`}} >{route.params.name}`s</Text>
    <Text style={{marginBottom:60,fontSize:28}}>  Selection is : {select}</Text>
    </View>
  
 

 <TouchableOpacity  style={styles.container_touch} onPress={()=>{ nav.navigate('AboutUs'),bnmcontext.arr.select = select }} >
    <Text style={{color:`blue`}}>see the history</Text>    
    <AntDesign name="caretright" size={24} color="blue" />
 </TouchableOpacity>

 
        </View>
      
    )
}

const styles =StyleSheet.create({

container_1:{
flex:1 ,
justifyContent:"center",
alignItems:"center",
backgroundColor:`#EFE707`

},
container_2:{
    margin:5,
    alignItems:`center`,
    justifyContent:"center",
    backgroundColor:`#FF8255`,
    borderRadius:20
},
container_touch:{
marginBottom:40,
position:`relative`,
left:90,
flexDirection:`row`

}

})