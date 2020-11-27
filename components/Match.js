import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Player from './Player';
import variables from '../variables'

function Match(props) {
  return (
    <View style={styles.background}>
      <Player img={variables.photos[props.players.player]}/>
      <Image style={styles.image} source={require('../imgs/vs.png')} />
      <Player img={variables.photos[props.players.android]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    //padding: 5,
  },
  image: {
    height: 50,
    width: 50,
    margin: 3,
    alignSelf: 'center',
  },
});

export default Match;
