import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Header, Content} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import CalendarItem from './CalendarItem';
import FlatlistTest from './FlatlistTest';
export default class CalendarView extends Component {
  render() {
    return <FlatlistTest />;
  }
}
