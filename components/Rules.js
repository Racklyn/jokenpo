import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';


function Rules(props) {
  
  return (
    <Image
      style={styles.image}
      source={props.rules?require('../imgs/regras.png'):require('../imgs/jogadores.png')}
    />
  )
}

const styles = StyleSheet.create({
  image:{
    maxWidth: '100%',
    maxHeight: 220,
    resizeMode: 'contain',
    borderColor: '#225',
    borderWidth: 2,
  },
});

export default Rules;
