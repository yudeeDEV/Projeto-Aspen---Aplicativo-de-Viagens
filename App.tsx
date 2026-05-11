import 'react-native-gesture-handler';
import './global.css';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '@/screens/home/Home';
import Dashboard from '@/screens/dashboard/Dashboard';
import Details from '@/screens/dashboard/Details';
import Login from '@/screens/dashboard/Login';
import Settings from '@/screens/dashboard/Settings';

// Tipando as rotas para o TypeScript
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Dashboard: undefined;
  Details: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{ headerShown: false }} // Esconde a barra de título padrão
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}