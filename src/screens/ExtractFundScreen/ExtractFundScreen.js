import React, { Component } from 'react';
import {Container, Content, Form, Item, Input, Label, Button, Text} from 'native-base';

class ExtractFundScreen extends Component {
  static navigationOptions = {
    headerTitle:
      <Text
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 20}}
      >    Extract Funds</Text>,
    headerStyle: {
      backgroundColor: '#6b52ae',
    },
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}}>
          <Form>
            <Item stackedLabel>
              <Label>Enter amount</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Purpose</Label>
              <Input />
            </Item>
          </Form>
          <Button rounded block style={{
            marginTop: 12,
            marginLeft: 7,
            marginRight: 7,
            backgroundColor: "#6b52ae"
          }}>
            <Text>Extract amount</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ExtractFundScreen;
