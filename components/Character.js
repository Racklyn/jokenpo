import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Item from './Item';

import variables from '../variables'

function Character(props) {

  const [player, setPlayer] = useState(props)


  /*function changePlayer(i){
    variables.player = i
    alert(i)
  }*/
 
  return (
    <View style={styles.background}>
      {variables.photos.map((elem,idx)=>{
        return(
          <Item
            key={idx}
            img={elem}
            onPress={e=>props.onPress(idx)}
          />
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding:5,
  },
});

export default Character;
