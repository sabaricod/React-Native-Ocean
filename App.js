
import { createStackNavigator} from '@react-navigation/stack';
import {StatusBar, View} from 'react-native'
import MyHeader from './components/Myheader'
import Home from "./screens/Home"
import Student from './screens/Student'
import AddStaff from './screens/AddStaff'
import ViewStaff from './screens/ViewStaff'
import ViewCourse from './screens/ViewCourse'
import AddCourse from './screens/AddCourse'


const Stack = createStackNavigator();

const App = () => {
  
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor="#59758b" barStyle="light-content"/>
      <Stack.Navigator 
      initialRouteName="Home" 
      screenOptions={{
        animationEnabled:false,
        header:({navigation,route,layout})=>{
          return(
            <MyHeader layout={layout} navigation={navigation}/>
          )
        }
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="AddCourse" component={AddCourse} />
        <Stack.Screen name="ViewCourse" component={ViewCourse} />
        <Stack.Screen name="AddStaff" component={AddStaff} />
        <Stack.Screen name="ViewStaff" component={ViewStaff} /> 
      </Stack.Navigator>
    </View>
  );
};


export default App;
