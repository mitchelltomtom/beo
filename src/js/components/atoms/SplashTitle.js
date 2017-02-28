import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
export default class SplashTitle extends Component {
  render(){
    return (<View style={styles.container}>
      <View style={styles.titleWrapper}>
          <Text style={styles.title}>Beo</Text>
      </View>
      <Text style={styles.subtitle}>The No Hassle Health App</Text>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60'
  },
  title: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20,
    fontSize: 16
  },
  titleWrapper: {
    justifyContent: 'center',
    flex: 1
  }
});
