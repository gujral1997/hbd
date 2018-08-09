import LottieView from 'lottie-react-native';
import React from 'react'

export default class Hbd extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./chinese.json')}
        style={{height:200, width: 200}}
      />
    );
  }
}