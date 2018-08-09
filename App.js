import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Hbd from './Hbd';
import Happy from './Happy'

export default class App extends React.Component {

  state = {
    icon: false
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.setState({icon:!this.state.icon})}>
        {this.state.icon?(<Hbd/>):
      (
        <Happy/>
      )}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
