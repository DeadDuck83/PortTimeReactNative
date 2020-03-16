import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';
export default class CalendarItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: 100,
          height: 100,
        }}>
        <Text>Date</Text>
      </View>
    );
  }
}
