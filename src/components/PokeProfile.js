import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import HeaderDex from './HeaderDex';
import HP from '../../assets/health-normal.png';
import Damage from '../../assets/damage.png';
import Shield from '../../assets/shield.png';
import Speed from '../../assets/sprint.png';

const PokeProfile = ({data, isLoading}) => {
  if (data !== undefined) {
    return (
      <>
        {isLoading ? (
          <Text> Loading... </Text>
        ) : (
          data.map(item => {
            return (
              <View style={styles.container} key={item.id}>
                <HeaderDex />
                <View style={{alignItems: 'center'}}>
                  <View style={styles.imgContainer}>
                    <Image
                      source={{
                        uri: item.sprites.other['official-artwork']
                          .front_default,
                      }}
                      style={styles.image}
                    />
                  </View>

                  <View style={styles.nameContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={{color: 'black', fontSize: 14}}>
                      #{item.id.toString().padStart(3, '0')}
                    </Text>
                  </View>
                </View>

                <View style={styles.line} />

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
              </View>
            );
          })
        )}
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 3,
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  image: {
    width: 120,
    height: 120,
  },
  name: {
    color: 'black',
    fontSize: 18,
    textTransform: 'capitalize',
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
