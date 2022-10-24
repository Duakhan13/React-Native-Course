import React, {useReducer, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ColorCounter from '../components/ColorCounter';

// code without reducer
// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);
//   const COLOR_INCREMENT = 15;
//   const setColor = (color, change) => {
//     //color =red,green,blue
//     //change ===+15,-15
//     switch (color) {
//       case 'red':
//         red + change > 255 || red + change < 0 ? null : setRed(red + change);
//         break;
//       case 'blue':
//         blue + change > 255 || blue + change < 0
//           ? null
//           : setBlue(blue + change);
//         break;
//       case 'green':
//         green + change > 255 || green + change < 0
//           ? null
//           : setGreen(green + change);
//         break;
//       default:
//         break;
//     }
//   };
//   return (
//     <View>
//       <ColorCounter
//         color="Red"
//         onIncrease={() => setColor('red', COLOR_INCREMENT)}
//         onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
//       />
//       <ColorCounter
//         color="Blue"
//         onIncrease={() => setColor('blue', COLOR_INCREMENT)}
//         onDecrease={() => setColor('blue', 1 * COLOR_INCREMENT)}
//       />
//       <ColorCounter
//         color="Green"
//         onIncrease={() => setColor('green', COLOR_INCREMENT)}
//         onDecrease={() => setColor('green', 1 * COLOR_INCREMENT)}
//       />
//       <View
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: `rgb(${red}, ${green},${blue})`,
//         }}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   text: {
//     color: 'black',
//   },
// });

//code with reducer

const reducer = (state, action) => {
  //state == {red:number, green:number ,blue:number}
  //action==={type: 'change_red'||'chnage_green'||'change_blue', payload: 15||-15}
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};

    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};

    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};

    default:
      return state;
  }
};
const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  ///  const {red, green, blue} = state;
  console.log(state);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({type: 'change_red', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({type: 'change_blue', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({type: 'change_green', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default SquareScreen;
