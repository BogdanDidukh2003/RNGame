import React from 'react';
import {TouchableOpacity, View, Dimensions } from 'react-native';

import Styles from './../styles';
import { AppDataContext } from './../util';

import CardFlip from 'react-native-card-flip';

const Blocks = (props) => {
  const { theme } = React.useContext(AppDataContext);
  const gridSize = props.size;
  const callback = props.callback;
  const correctTiles = props.correctTiles;
  const [isShowing, setIsShowing] = React.useState(true);
  const tileSize = Dimensions.get('window').width / gridSize - 10;
  const elementsRef = React.useRef([...Array(gridSize*gridSize).keys()].map(() => React.createRef()));

  const cardSize = {
      width: tileSize,
      height: tileSize
  };

  const showUp = React.useCallback(()=>{
    for (const i of correctTiles){
      elementsRef.current[i].flip();
    }
  },[]);

  React.useEffect(() => {
    showUp();
    setTimeout(() => {
      showUp();
      setIsShowing(false);
    }, 2000);
  });

  return (
    <View>
    {[...Array(gridSize).keys()].map((row) => (
        <View style={Styles[theme].cardContainer} key={row.toString()}>
        {[...Array(gridSize).keys()].map((index) => (
          <CardFlip
            duration={250}
            style={[cardSize, Styles[theme].card]}
            onFlipEnd={() => callback(elementsRef.current[row*gridSize + index])}
            key={row*gridSize + index}
            ref={card => elementsRef.current[row*gridSize + index] = card}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={[Styles[theme].cardFace, cardSize, Styles[theme].cardFront]}
              onPress={() => isShowing ? null : elementsRef.current[row*gridSize + index].flip()}>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[Styles[theme].cardFace, cardSize, Styles[theme].cardBack]}
              onPress={() => isShowing ? null : elementsRef.current[row*gridSize + index].flip()}>
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
