import React, {Component} from 'react';
import { Container, Content, Card, CardItem, Text, Icon, Right, Left } from 'native-base';

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text style={{color: "#fff", fontWeight: "bold"}}>    Funds</Text>,
    headerStyle: {
      backgroundColor: '#6b52ae',
    },
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem bordered>
              <Icon type="MaterialCommunityIcons" name="currency-inr" style={{color: "#6b52ae"}}/>
              <Left>
                <Text>Total avalible fund</Text>
              </Left>
              <Right>
                <Text>0</Text>
              </Right>
            </CardItem>
            <CardItem bordered>
              <Icon type="Ionicons" name="swap" style={{color: "#6b52ae"}}/>
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