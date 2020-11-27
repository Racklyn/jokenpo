import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

function Item(props) {

  //function select() {}

  //const image = require(props.img);
  //const img = require('../imgs/pedra.png');

  return (
    <TouchableOpacity /*activeOpacity={0.5}*/ style={styles.button} onPress={props.onPress}>
      <Image style={styles.image} source={props.img} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // background: {
  //   flex: 1,
  //   //backgroundColor: 'purple',
  //   //margin: 3,
  //   justifyContent: 'center',
  // },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#225',
    height: 60,
    width: 60,
    padding: 5,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 60,
  },
});

export default Item;

//<Image
//style={styles.image}
//source={require('../imgs/pedra.png')}
//resizeMode="contain"
///>
