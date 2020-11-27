import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Score from './Score';

import variables from '../variables';

function ScoreBoard(props) {
  return (
    <View style={styles.background}>
      <Score
        score={props.scores.scorePlayer}
        style={props.lastWinner==1?{backgroundColor: 'red'}:null}
      />
      <Score
      score={props.scores.scoreAndroid}
      style={props.lastWinner==2?{backgroundColor: 'red'}:null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
});

export default ScoreBoard;