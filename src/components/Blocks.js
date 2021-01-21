import React from 'react';
import {TouchableOpacity, View, Dimensions } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';

import CardFlip from 'react-native-card-flip';

const Blocks = (props) => {
  const { theme } = React.useContext(AppDataContext);
  const gridSize = props.size;
  const tileSize = Dimensions.get('window').width / gridSize - 10;
  const elementsRef = React.useRef([...Array(gridSize*gridSize).keys()].map(() => React.createRef()));

  const cardSize = {
      width: tileSize,
      height: tileSize
  };

  return (
    <View>
    {[...Array(gridSize).keys()].map((row) => (
        <View style={Styles[theme].cardContainer} key={row.toString()}>
        {[...Array(gridSize).keys()].map((index) => (
          <CardFlip duration={250} style={[cardSize, Styles[theme].card]} key={index.toString() + row} ref={card => elementsRef.current[index.toString() + row] = card}>
            <TouchableOpacity
              activeOpacity={1}
              style={[Styles[theme].cardFace, cardSize, Styles[theme].cardFront]}
              onPress={() => elementsRef.current[index.toString() + row].flip()}>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[Styles[theme].cardFace, cardSize, Styles[theme].cardBack]}
              onPress={() => elementsRef.current[index.toString() + row].flip()}>
            </TouchableOpacity>
          </CardFlip>
        )
      )}
      </View>
    ))}
    </View>
  );
};

export default Blocks;
