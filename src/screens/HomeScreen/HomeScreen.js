import React, {Component} from 'react';
import { Container, Content, Card, CardItem, Text, Icon, Right, Left } from 'native-base';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Funds',
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon type="MaterialCommunityIcons" name="currency-inr" />
              <Left>
                <Text>Total avalible fund</Text>
              </Left>
              <Right>
                <Text>0</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Icon type="MaterialCommunityIcons" name="bank" />
              <Left>
                <Text>Last transaction</Text>
              </Left>
              <Right>
                <Text>0</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;