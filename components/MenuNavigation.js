import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
export default class MenuNavigation extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical active>
            <Icon name="grid" />
            <Text>Calendar</Text>
          </Button>
          <Button vertical>
            <Icon active name="contact" />
            <Text>Account</Text>
          </Button>
          <Button vertical>
            <Icon name="paper-plane" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
