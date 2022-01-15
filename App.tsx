import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes/App.routes';
import {SafeAreaView} from 'react-native'
export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#000000"}}>
    <AppRoutes />
    <StatusBar 
    bar-style='autp'
    backgroundColor='transparent'
    translucent />
    </SafeAreaView>
  );
}


