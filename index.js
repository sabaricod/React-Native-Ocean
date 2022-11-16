
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { StaffContextProvider } from './context/staffContext'
import { DeptContextProvider } from './context/deptContext'
const Root = () => {
  return (
    <NavigationContainer>
     <StaffContextProvider>
      <DeptContextProvider>
      <App />
      </DeptContextProvider>
      </StaffContextProvider>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Root);
