import React, { Component } from 'react';
import {Container, Content, Form, Item, Input, Label, Button, Text, Icon} from 'native-base';

class AddFundScreen extends Component {
  static navigationOptions = {
    headerTitle:
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 20}}
      >    Add Funds</Text>,
    headerStyle: {
      backgroundColor: '#6b52ae',
    },
    headerBackImage: <Icon type="MaterialIcons" name="arrow-back" style={{color: "#fff"}}/>
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
