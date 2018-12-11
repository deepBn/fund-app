import React, {Component} from 'react';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

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
              <Text>Total avalible fund</Text>
              <Right>
                <Text>0</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Icon type="MaterialCommunityIcons" name="bank" />
              <Text>Last transaction amount</Text>
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