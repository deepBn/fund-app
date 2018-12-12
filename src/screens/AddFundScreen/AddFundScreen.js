import React, { Component } from 'react';
import {Container, Content, Form, Item, Input, Label, Button, Text} from 'native-base';

class AddFundScreen extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button rounded block style={{
            marginTop: "auto",
            margin: 7,
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
