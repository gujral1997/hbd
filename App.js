import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Hbd from './Hbd';
import Happy from './Happy'

export default class App extends React.Component {

  componentDidMount() {
    setTimeout(()=>{this.setState({happyBirthday: true})}, 3000);
    setTimeout(()=>{this.setState({press: true})}, 5000);
  }

  state = {
    icon: false,
    happyBirthday: false,
    press: false,
    afterPress: false
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
          this.setState({
            icon:!this.state.icon,
            happyBirthday: !this.state.happyBirthday,
            press: false,
            afterPress: !this.state.afterPress
          })
      }} style={styles.animation}>
        {this.state.icon?(<Hbd/>):
      (
        <Happy/>
      )}
        </TouchableOpacity>
        {this.state.happyBirthday?(
          <Text>Happy Birthday Ullu!!</Text>
        ):(
          null
        )}
        {
          this.state.press?(
            <Text>Press the gift to open it.</Text>
          ):null
        }
        {
          this.state.afterPress?(
            <Text>Yeh le China ka Flag</Text>
          ):null
        }
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
