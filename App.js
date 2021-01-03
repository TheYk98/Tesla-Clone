import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View  } from 'react-native';
import CarItem from './components/CarItem/index.js';
import StyledButton from './components/StyledButton/index.js';

export default function App() {
  return (
    <View style={styles.container} >
      <CarItem modelName="Tesla Model S" tagline="Order Online For" taglineCTA="Touchless Delivery" imageSrc={require('./assets/images/ModelS.jpeg')}/>
    
    <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
