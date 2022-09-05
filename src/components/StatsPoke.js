import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import HP from '../../assets/health-normal.png';
import Damage from '../../assets/damage.png';
import Shield from '../../assets/shield.png';
import Speed from '../../assets/sprint.png';

const StatsPoke = ({item}) => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statContainer}>
        <Image source={HP} style={styles.imgStats} />
        <Text style={styles.stats}>{item.stats[0].base_stat}</Text>
      </View>

      <View style={styles.statContainer}>
        <Image source={Damage} style={styles.imgStats} />
        <Text style={styles.stats}>{item.stats[1].base_stat}</Text>
      </View>

      <View style={styles.statContainer}>
        <Image source={Shield} style={styles.imgStats} />
        <Text style={styles.stats}>{item.stats[2].base_stat}</Text>
      </View>

      <View style={styles.statContainer}>
        <Image source={Speed} style={styles.imgStats} />
        <Text style={styles.stats}>{item.stats[5].base_stat}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
export default StatsPoke;
