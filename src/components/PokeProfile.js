import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import ImagePokemon from '../../assets/ditto.png';
import HP from '../../assets/health-normal.png';
import Damage from '../../assets/damage.png';
import Shield from '../../assets/shield.png';
import Speed from '../../assets/sprint.png';

const PokeProfile = props => {
  let namePoke = 'Ditto';
  let damagePoke = 10;
  let speedPoke = 10;
  let HpPoke = 10;
  let shieldPoke = 10;
  namePoke = props.name;
  damagePoke = props.damage;
  speedPoke = props.speed;
  HpPoke = props.health;
  shieldPoke = props.shield;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.type}>Compare</Text>
        <Text style={styles.like}>Like</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={styles.imgContainer}>
          <Image
            source={ImagePokemon}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>{namePoke}</Text>
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Image source={HP} style={styles.imgStats} />
          <Text style={styles.stats}>{HpPoke}</Text>
        </View>

        <View style={styles.statContainer}>
          <Image source={Damage} style={styles.imgStats} />
          <Text style={styles.stats}>{damagePoke}</Text>
        </View>

        <View style={styles.statContainer}>
          <Image source={Shield} style={styles.imgStats} />
          <Text style={styles.stats}>{shieldPoke}</Text>
        </View>

        <View style={styles.statContainer}>
          <Image source={Speed} style={styles.imgStats} />
          <Text style={styles.stats}>{speedPoke}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 3,
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
  },
  image: {
    maxWidth: 120,
    maxHeight: 120,
  },
  name: {
    color: 'black',
    fontSize: 18,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  type: {
    paddingHorizontal: 10,
    color: 'black',
  },
  like: {
    paddingHorizontal: 10,
    color: 'black',
  },
  nameContainer: {
    alignItems: 'center',
    marginBottom: 3,
  },
  imgContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    margin: 3,
    maxWidth: 120,
    maxHeight: 120,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 3,
    marginBottom: 5,
  },
  stats: {
    paddingHorizontal: 5,
    margin: 1,
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
  statContainer: {
    alignItems: 'center',
  },
  imgStats: {
    paddingHorizontal: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 1,
  },
  line: {
    height: 3,
    backgroundColor: 'white',
  },
});

export default PokeProfile;
