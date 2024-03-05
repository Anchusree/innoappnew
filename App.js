import 'react-native-gesture-handler'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { createContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from 'react-native-vector-icons'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Login from './components/screens/Login';
import { doc, setDoc, getDocs, getDoc, collection, deleteDoc, addDoc } from "firebase/firestore";
import { SafeAreaProvider } from "react-native-safe-area-context";


export const AuthContext = createContext()

const Stack = createNativeStackNavigator();

const CenteredTitle = ({ title, props }) => {
  return (
    <View style={styles.headerTitle}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <AuthContext.Provider value={{ }}>
        <NavigationContainer>
          <Stack.Navigator>

            

            <Stack.Screen name='LoginUser' component={LoginUser}
              options={{
                headerLeft: () => false,
                headerBackTitle: false,
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#E4EDF2'
                }, headerTitle: (props) => <CenteredTitle title="Signin to Elderly Care" {...props} />, headerBackTitleVisible: false
              }} />

          </Stack.Navigator>




        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
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
