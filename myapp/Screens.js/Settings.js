
   
import { useContext } from "react"
import { View ,Text, TouchableOpacity} from "react-native"
import { mycontext } from "../App"
import { useNavigation } from "@react-navigation/native";
 
 
export const Settings=()=>{

const bnmcontext = useContext(mycontext);
const nav =useNavigation();

    return(
        <View style={{backgroundColor:`#00FAF6`,flex:1,alignItems:`center`}}>
        

 <View style={{ position:`absolute`,left:40,top:180,flexDirection:`row`}}>
            
        <Text style={{fontWeight:`bold`,fontSize:34}}>Good bye </Text>
        <Text style={{fontWeight:`bold`,fontSize:34}}>{bnmcontext.arr.isim}</Text>

 </View>

 <View style={{position:`absolute`,left:40,top:260,flexDirection:`row`}} >
      <Text style={{fontWeight:`bold`,fontSize:24}}>Your order number is:     </Text>
      <Text style={{fontWeight:`bold`,fontSize:24}}>{bnmcontext.arr.select}</Text>
</View>
       
       <TouchableOpacity style={{ position:`absolute`,left:40,top:290,flexDirection:`row`}} onPress={() => nav.navigate('Product',{name:bnmcontext.arr.isim,num:null})}>
        <Text>if your ORDER wrong click here!! </Text>
        </TouchableOpacity>
       
 <View style={{ position:`absolute`,left:40,top:340}}>
      <Text style={{fontWeight:`bold`,fontSize:22}}>We call you from this number:</Text>
      <Text style={{fontWeight:`bold`,fontSize:24}}>{bnmcontext.arr.num}</Text>
 </View>

 <TouchableOpacity style={{ position:`absolute`,left:40,top:400,flexDirection:`row`}}  onPress={() => nav.navigate('Welcome')}>
    <Text>if your NUMBER wrong click here!! </Text>
    </TouchableOpacity>
   
        </View>
    )
}   