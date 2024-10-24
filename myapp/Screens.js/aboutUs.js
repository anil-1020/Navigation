import { View,Text,ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native";


export const AboutUs=()=>{
 
    return(
     
 <ImageBackground source={require(`./tari.jpg`)} style={{flex:1}}>
   <View style={{width:150,height:800,position:`absolute`,right:1}}> 

 <Text  style={{fontWeight:"bold",fontSize:32}}>OUR HISTORY STORY </Text>
   <Text style={{fontWeight:`bold`}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
       sunt in culpa qui officia deserunt mollit anim id est laborum.
       
       </Text>
      
   </View>
    
    </ImageBackground>
       
    )
}