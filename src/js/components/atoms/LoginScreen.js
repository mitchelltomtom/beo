import React, { Component } from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import LoginForm from './LoginForm'
export default class SplashScreen extends Component {
  render(){
    return (<View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../../../assets/images/logo.png')} />
        <Text style={styles.title}>The No Hassle Health App</Text>
        </View>
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </View>)
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  title:{
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.6
  }
});
