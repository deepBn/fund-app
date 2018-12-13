import React, { Component } from 'react';
import {Container, Content, Form, Item, Input, Label, Button, Text} from 'native-base';

class AddFundScreen extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}}>
          <Form>
            <Item stackedLabel>
              <Label>Add amount</Label>
              <Input />
            </Item>
          </Form>
          <Button rounded block style={{
            marginTop: 12,
            marginLeft: 7,
            marginRight: 7,
            backgroundColor: "#6b52ae"
          }}>
            <Text>Add amount</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default AddFundScreen;
