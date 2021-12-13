import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default function App() {
  const [betet, setBetet] = useState();
  const [tokesitesSzam, setTokesitesSzam] = useState();
  const [nevleges, setNevleges] = useState();
  const [tenyleges, setTenyleges] = useState();

  function handleCalcButton() {
    let tenylegesKamat = (Math.pow(1 + (nevleges / (100 * tokesitesSzam)), tokesitesSzam) -1) * betet;
    setTenyleges(tenylegesKamat.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text>Kamatos kamat</Text>

      <Text>Betét</Text>
      <TextInput 
        onChangeText={(betet) => setBetet(betet)}
        placeholder='Betét'
      />

      <Text>Tőkésítések száma</Text>
      <TextInput
        onChangeText={(tokesitesSzam) => setTokesitesSzam(tokesitesSzam)}
        placeholder='Tőkésítések száma'
      />

      <Text>Névleges kamat</Text>
      <TextInput
        onChangeText={(nevleges) => setNevleges(nevleges)}
        placeholder='Névleges kamat'
      />

      <StatusBar style="auto" />

      <TouchableHighlight
          style={styles.runButton}
          onPress={handleCalcButton}
          >
          <Text style={styles.runText}>BUTTON</Text>
      </TouchableHighlight>

      <Text>Tényleges kamat: {tenyleges}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  runButton: {
    backgroundColor: 'blue',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
  },
  runText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  }
});
