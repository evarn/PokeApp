import React, {useState} from 'react';
import PokeProfile from '../components/PokeProfile.js';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const HomePage = () => {
  const [pokeDate, setPokeDate] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.ViewText}>
          <View>
            <Text style={styles.Text}>Poke Deck:</Text>
          </View>
          <View style={styles.PokeProfile}>
            <PokeProfile
              name="Ditto"
              damage="15"
              speed="15"
              health="15"
              shield="15"
            />
            <PokeProfile
              name="Ditto"
              damage="15"
              speed="15"
              health="15"
              shield="15"
            />
            <PokeProfile
              name="Ditto"
              damage="15"
              speed="15"
              health="15"
              shield="15"
            />
            <PokeProfile
              name="Ditto"
              damage="15"
              speed="15"
              health="15"
              shield="15"
            />
            <PokeProfile
              name="Ditto"
              damage="15"
              speed="15"
              health="15"
              shield="15"
            />
            <PokeProfile
              name="Ditto"
              damage="15"
              speed="15"
              health="15"
              shield="15"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ViewText: {backgroundColor: '#DDBEC3'},
  Text: {
    textAlign: 'center',
    fontSize: 36,
    padding: 0,
    color: 'black',
  },
  PokeProfile: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default HomePage;
