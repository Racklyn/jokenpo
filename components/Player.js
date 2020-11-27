import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


function Player(props) {
  return (
    <Image
      style={styles.image}
      source={props.img}
      resizeMode='contain'
    />
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'orange',
    margin: 15,
  },
  image: {
    height: 135,
    width: 135,
    borderColor: '#225',
    borderWidth: 2,
  },
});

export default Player;