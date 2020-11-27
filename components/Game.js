import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Match from './Match';
import ScoreBoard from './ScoreBoard';

function Game(props) {
  return (
    <View style={styles.background}>
      <Image style={styles.image} source={require('../imgs/nomes.png')} />
      <Match players={props.values.players}/>
      <ScoreBoard scores={props.values.scores} lastWinner={props.lastWinner}/>
      <Text style={styles.text}>Developed by Felipe Rafael & Francisco Racklyn - 514</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 8,
    backgroundColor: 'white',
    borderColor:'#225',
    borderWidth: 2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomWidth: 0,
  },
  image: {
    //flex: 1,
    alignSelf: 'center',
    height: 50,
    width: 300,
  },
  text: {
    alignSelf: 'center',
    fontSize: 12,
    //fontWeight: 'bold',
  },
});

export default Game;
