import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Score(props) {
  return (
    <View style={[styles.background, props.style]}>
      <Text style={styles.text}>{props.score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7575a3',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
  },
  text: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Score;