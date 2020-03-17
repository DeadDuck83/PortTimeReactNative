import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import MenuNavigation from './components/MenuNavigation';
import CalendarView from './components/CalendarView';
import FlatlistTest from './components/FlatlistTest';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Icon name="boat" />
          </Body>
          <Right />
        </Header>
        <CalendarView />

        <MenuNavigation />
      </Container>
    );
  }
}
