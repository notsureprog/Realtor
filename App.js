import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import PropertiesBoughtPage from './src/screens/PropertiesBoughtPage';
import PropertiesSoldPage from './src/screens/PropertiesSoldPage';
import PropertiesRentingPage from './src/screens/PropertiesRentingPage';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='PropertiesBoughtPage' component={PropertiesBoughtPage} />
        <Stack.Screen name='PropertiesSoldPage' component={PropertiesSoldPage} />
        <Stack.Screen name='PropertiesRentingPage' component={PropertiesRentingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
