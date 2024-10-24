
 
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Contact } from './Screens.js/contact';
import { Settings } from './Screens.js/Settings';
import { Welcome } from './Screens.js/welcome';
import { Product } from './Screens.js/product';
import { AboutUs } from './Screens.js/aboutUs';
import { createContext, useState } from 'react';

export const mycontext = createContext();


export default function App() {

  const Drawer = createDrawerNavigator();
  const Tabs = createBottomTabNavigator();
 const[arr , setArr]=useState({
isim:``,
num:null,
select:null,

 });


const TabNav=()=>{

return(
<Tabs.Navigator
 screenOptions={({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Contact') {
      iconName = focused
        ?  "chatbubbles-outline"
        :  "chatbubbles-outline";
    } else if (route.name === 'Settings') {
      iconName = focused ?   "settings-outline" :   "settings-outline";
    }
    <ion-icon name="chatbubbles-outline"></ion-icon>
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'green',
  tabBarInactiveTintColor: 'gray',
})}
>

  <Tabs.Screen name='Contact' component={Contact}/>
  <Tabs.Screen name='Settings' component={Settings}/>

</Tabs.Navigator>

)

}


  return (
<mycontext.Provider value={{arr ,setArr}}> 
 <NavigationContainer independent={true}>
      <Drawer.Navigator>
      
      <Drawer.Screen name='Welcome' component={Welcome}    />
      <Drawer.Screen name='Product' component={Product}    />
      <Drawer.Screen name='AboutUs' component={AboutUs}    />
      <Drawer.Screen name='Your  info'  component={TabNav} options={{headerShown:false}} />
 
      </Drawer.Navigator>
   </NavigationContainer>
  </mycontext.Provider>
  );
}

 
