import React, { Component } from 'react';
import { TextInput, TouchableOpacity, Text, View, KeyboardAvoidingView, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
  render(){
    return (<KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <TextInput
        placeholder="username or email"
        placeholderTextColor="rgba(255, 255, 255, 0.2)"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      <TextInput
        placeholder="password"
        placeholderTextColor='rgba(255, 255, 255, 0.2)'
        returnKeyType="go"
        secureTextEntry
        style={styles.input}
        ref={(input)=>this.passwordInput = input}
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>)
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});
