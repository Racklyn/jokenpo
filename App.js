import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

import {MaterialCommunityIcons} from '@expo/vector-icons'

import Rules from './components/Rules';
import Character from './components/Character';
import Game from './components/Game';

import variables from './variables'

export default function App() {

  function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const [showRules, setShowRules] = useState(false)
  const [player, setPlayer] = useState(0)
  const [android, setAndroid] = useState(0)
  const [lastWinner, setLastWinner] = useState(0) //0: empate / 1: Player / 2: Android
  const [scorePlayer, setScorePlayer] = useState(0)
  const [scoreAndroid, setScoreAndroid] = useState(0)
  const [theme, setTheme] = useState(0)

  const [play, setPlay] = useState(true)
  
  useEffect(()=>{
    verify(player, android)
  }
  ,[play])

  async function startBattle(i){
    setPlayer(i)
    for(var c=0;c<=5;c++){
      await sleep(100)
      setAndroid(Math.floor(Math.random()*5))
    }
    setPlay(!play)
  }

  async function verify(p1,p2){
    const conditions = variables.conditions

    if(p1===p2){
      setLastWinner(0)
      return
    }
    if(conditions[p1].includes(p2)){
      setScorePlayer(scorePlayer+1)
      setLastWinner(1)
    }else if(conditions[p2].includes(p1)){
      setScoreAndroid(scoreAndroid+1)
      setLastWinner(2)
    }

    await sleep(1000)
    setLastWinner(0)
  }

  function restart() {
    setScorePlayer(0);
    setScoreAndroid(0);  
    setLastWinner(0)  
  }

  return (
    <View style={[styles.background]}>
      <View style={[styles.title, {backgroundColor: theme?'#0a0a0f':'#47476b'}]}>
        <Text style={styles.text} onTouchStart={e=>setShowRules(!showRules)}>JOKENPO</Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.restart, {backgroundColor: theme?'#47476b':'#7575a3'}]}
            onPress={()=>restart()}
          >
            <MaterialCommunityIcons name='restart' size={24} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.restart, {backgroundColor: theme?'#47476b':'#7575a3'}]}
            onPress={()=>setTheme(!theme)}
          >
            <MaterialCommunityIcons name='theme-light-dark' size={24} color={theme?'#fda':'#222'}/>
          </TouchableOpacity>
        </View>
        
      </View>

      <View style={[styles.container, {backgroundColor: theme?'#33334d':'#9999ff'}]}>
        <Rules rules={showRules} />
        <Character onPress={i=>startBattle(i)}/>
        <Game
          values={{
            players:{
              player,
              android
            },
            scores:{
              scorePlayer,
              scoreAndroid
            }
          }}

          lastWinner={lastWinner}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#47476b',
    paddingLeft: 40,
    paddingRight: 10
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    //marginHorizontal: 30,
  },
  restart: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    backgroundColor: '#7575a3',
    borderRadius: 40,
    marginHorizontal: 10,
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 9,
    backgroundColor: '#9999ff',
    padding: 6,
    paddingVertical:0
  },
});
