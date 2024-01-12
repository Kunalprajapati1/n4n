import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import One from './src/screen/First';
import Home from './src/screen/home';
import Profile from './src/screen/Profile';
import Donate from './src/screen/Donate';
import Search from './src/screen/Search';
import About from './src/screen/About';
import First from './src/screen/First';
import Started from './src/screen/Started';
import Skip from './src/screen/Skip';
import Again from './src/screen/Again';
import Ngosss from './src/screen/Ngosss';
import Menuu from './src/screen/Menuu';
import ProfileEdit from './src/screen/ProfileEdit';
import Contact from './src/screen/Contact';
import Login from './src/screen/Login';
import Sign from './src/screen/Sign';
import Profiles from './src/screen/Profiles';

import Faltu from '../n4n/src/screen/Faltu';
import ProductDetail from '../n4n/src/screen/ProductDetail';




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Donate" component={Donate} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Started" component={Started} />
        <Stack.Screen name="Skip" component={Skip} />
        <Stack.Screen name="Again" component={Again} />
        <Stack.Screen name="Ngosss" component={Ngosss} />
        <Stack.Screen name="Menuu" component={Menuu} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Profiles" component={Profiles} />
        <Stack.Screen name="Faltu" component={Faltu} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A9D5F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
