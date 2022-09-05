import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const ComparePage = ({navigation}) => {
  const [isCompareBtn1, setIsCompareBtn1] = useState(false);
  const [isCompareBtn2, setIsCompareBtn2] = useState(false);
  const goToHome = flag => {
    navigation.navigate('HomePage');
    flag ? setIsCompareBtn1(true) : setIsCompareBtn2(true);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#DDBEC3'}}>
      <View>
        <Text style={styles.text}>Сравни покемонов</Text>
      </View>
      <View style={styles.container}>
        {isCompareBtn1 ? (
          <Text onPress={setIsCompareBtn1(false)}>Poke</Text>
        ) : (
          <TouchableOpacity
            onPress={() => goToHome(true)}
            style={styles.button}>
            <Text style={styles.subText}>Добавить к сравнению</Text>
          </TouchableOpacity>
        )}

        {isCompareBtn2 ? (
          <Text onPress={setIsCompareBtn2(false)}>Poke</Text>
        ) : (
          <TouchableOpacity
            onPress={() => goToHome(false)}
            style={styles.button}>
            <Text style={styles.subText}>Добавить к сравнению</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    fontSize: 36,
    padding: 0,
    margin: 5,
    color: 'black',
    fontFamily: 'Pokemon_Hollow',
  },
  subText: {
    textAlign: 'center',
    fontSize: 19,
    padding: 0,
    color: 'white',
  },

  button: {
    width: 125,
    height: 125,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default ComparePage;
