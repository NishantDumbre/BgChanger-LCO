import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';

import styles from '../config/styles';

const BgChanger = () => {
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');

  const changeBG = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
  };

  const black = () => {
    setRandomColor('black');
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Click to change color</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={black}>
          <Text style={styles.text}>Black button</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BgChanger;
