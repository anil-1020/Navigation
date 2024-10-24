import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { View,Text, TextInput ,StyleSheet,Button, TouchableOpacity} from "react-native"
 
  

export const Welcome=()=>{

    const nav = useNavigation();
    const[name,setName]=useState(``);
    const[num , setNum]=useState(null);

 
  
  
    return(
        <View style={{flex:1,backgroundColor:`#00E4F9`,justifyContent:"center",alignItems:"center"}}>
            
 <Text style={{fontWeight:"bold",fontSize:32}}>Welcome   </Text>
 <Text style={{fontSize:20,marginTop:90}}> Please Enter: </Text>

 <TextInput style={styles.inputname} placeholder="  your name"  value={name} onChangeText={(elen)=> setName(elen)}/>
 <TextInput style={styles.inputNumber}  inputMode="numeric" placeholder=" Your  phone number"  value={num} onChangeText={(elen)=> setNum(elen)} />
   <Button title="ENTER"  onPress={()=>{setName(``),setNum(null) ,nav.navigate('Product',{name:name,num:num})}}/>
 
        </View>
    )
}

const styles =StyleSheet.create({
inputname:{
    borderWidth:2,
    width:200,
    height:40,
    borderRadius:30,
    margin:5,
    paddingLeft:58
 

},
inputNumber:{
    borderWidth:2,
    width:200,
    height:40,
    borderRadius:30,
marginBottom:5,
 paddingLeft:28
}

})