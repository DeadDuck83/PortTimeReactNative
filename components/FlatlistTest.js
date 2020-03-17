import React from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

const data = [
  {key: 'A', date: 'Feb 2', shift: 'day', activeDay: false},
  {key: 'B', date: 'Feb 3', shift: 'night', activeDay: false},
  {key: 'C', date: 'Feb 4', shift: 'night', activeDay: false},
  {key: 'D', date: 'Feb 5', shift: 'swing', activeDay: false},
  {key: 'E', date: 'Feb 6', shift: 'day', activeDay: false},
  {key: 'F', date: 'Feb 7', shift: 'sick', activeDay: false},
  {key: 'G', date: 'Feb 8', shift: 'night', activeDay: false},
  {key: 'H', date: 'Feb 9', shift: 'day', activeDay: false},
  {key: 'I', date: 'Feb 10', shift: null, activeDay: false},
  {key: 'J', date: 'Feb 11', shift: 'day', activeDay: false},
  {key: 'A2', date: 'Feb 12', shift: 'day', activeDay: false},
  {key: 'B2', date: 'Feb 13', shift: 'meeting', activeDay: false},
  {key: 'C2', date: 'Feb 14', shift: 'doctor', activeDay: false},
  {key: 'D2', date: 'Feb 15', shift: 'holiday', activeDay: false},
  {key: 'E2', date: 'Feb 16', shift: null, activeDay: false},
  {key: 'F2', date: 'Feb 17', shift: null, activeDay: false},
  {key: 'G2', date: 'Feb 18', shift: null, activeDay: false},
  {key: 'H2', date: 'Feb 19', shift: null, activeDay: true},
  {key: 'I2', date: 'Feb 20', shift: null, activeDay: false},
  {key: 'J2', date: 'Feb 21', shift: null, activeDay: false},
  // { key: 'K' },
  // { key: 'L' },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};

// const renderItemStyle = data => {
//   console.log(this.data);
//   switch (data.shift) {
//     case 'day':
//       return {
//         style: 'styles.day',
//       };
//     case 'night':
//       return {
//         borderWidth: 3,
//         borderColor: 'blue',
//         borderStyle: 'solid',
//         flex: 1,
//       };
//     case 'swing':
//       return {
//         borderWidth: 3,
//         borderColor: 'green',
//         borderStyle: 'solid',
//         flex: 1,
//       };
//     case 'doctor':
//       return {
//         borderWidth: 3,
//         borderColor: 'pink',
//         borderStyle: 'solid',
//         flex: 1,
//       };
//     case 'meeting':
//       return {
//         borderWidth: 3,
//         borderColor: 'orange',
//         borderStyle: 'solid',
//         flex: 1,
//       };
//     case 'holiday':
//       return {
//         borderWidth: 3,
//         borderColor: 'purple',
//         borderStyle: 'solid',
//         flex: 1,
//       };
//     default:
//       return null;
//   }
// };

const numColumns = 6;
export default class App extends React.Component {
  renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    styleColor = item => {
      if (item.shift === 'day') {
        console.log('day');
        return {color: 'green'};
      } else if (item.shift === 'night') {
        console.log('night');
        return {color: 'orange'};
      } else if (item.shift === 'swing') {
        console.log('swing');
        return {color: 'red'};
      } else if (item.shift === 'doctor') {
        console.log('doctor');
        return {color: 'purple'};
      } else if (item.shift === 'meeting') {
        console.log('meeting');
        return {color: 'grey'};
      } else if (item.shift === 'holiday') {
        console.log('holiday');
        return {color: 'blue'};
      } else {
        console.log('NULL -----------------');
        return {color: 'transparent'};
      }
    };
    return (
      <View style={styles.item}>
        <Grid>
          <Row style={{backgroundColor: '#635DB7'}} size={4}>
            <Text style={styleColor(item)}>Test</Text>
          </Row>
          <Row style={{backgroundColor: '#00CE9F'}} size={1}>
            <Text style={styles.itemText}>{item.date}</Text>
          </Row>
        </Grid>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        keyExtractor={data.key}
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 3,
  },
  item: {
    backgroundColor: '#f2f5f8',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    margin: 3,
    // height: Dimensions.get('window').width / numColumns,
    height: 100,
    borderWidth: 1,
    borderColor: '#EFF2F5',
    borderStyle: 'solid',
    borderRadius: 7,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  itemText: {
    color: 'black',
    alignSelf: 'flex-end',
    fontSize: 10,
    textAlign: 'right',
    width: '100%',
    padding: 3,
  },
  //   day: {color: 'blue'},
  //   night: {color: 'pink'},
  //   swing: {color: 'green'},
  //   doctor: {color: 'purple'},
  //   holiday: {color: 'orange'},
  //   meeting: {color: 'red'},
});
