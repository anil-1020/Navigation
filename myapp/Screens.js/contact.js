import { View,Text } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
 

export const Contact=()=>{

    return(
 <View style={{justifyContent:"center",alignItems:"center",flex:1,backgroundColor:`#B83074`}}>

   <View style={{position:`absolute`,top:80}}>
     <FontAwesome6 name="handshake" size={120} color="black" />
   </View>

      <Text style={{fontSize:32,color:`white`}}>   keep in touch with us  </Text> 

     <View style={{ position:`absolute`,left:20,bottom:100,justifyContent:"center",alignItems:"center"}}>

     <View style={{flexDirection:`row`,justifyContent:"center",alignItems:"center"}}> 
     <Fontisto name="email" size={34} color="black" />
     <Text style={{fontWeight:"bold"}}>   :abc@otmail.com</Text>
     </View>

     <View style={{flexDirection:`row`,justifyContent:"center",alignItems:"center"  ,left:1}}>
     <Entypo name="old-phone" size={34} color="black" />
     <Text>:   5123-4576            </Text>
     </View>

    <View style={{flexDirection:`row`,justifyContent:"center",alignItems:"center" ,left:1,marginTop:2}}>
    <Entypo name="address" size={34} color="black" />
    <Text>:5.street 32 Block st.</Text>
    </View>


     </View>
 
 
 

        </View>
    )
}