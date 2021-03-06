import React, {Component} from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Left,
  Button,
  View,
} from 'native-base';
import {StyleSheet, ProgressBarAndroid} from 'react-native';
import {connect} from 'react-redux';

import {fetchFunds} from '../../store/actions';

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle:
      <Text
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 20}}
      >    Funds</Text>,
    headerStyle: {
      backgroundColor: '#6b52ae',
    },
  };

  componentDidMount() {
    this.props.fetchFunds();
  }

  render() {
    let amount = (
      <ProgressBarAndroid color="#6b52ae" styleAttr="Small"/>
    );

    if (this.props.isLoading === false) {
      amount = (
        <Text>{this.props.funds}</Text>
      );
    }

    return (
      <Container>
        <Content padder contentContainerStyle={{flex: 1}}>
          <Card>
            <CardItem bordered>
              <Icon
                type="MaterialCommunityIcons"
                name="currency-inr"
                style={{color: "#6b52ae"}}
              />
              <Left>
                <Text>Total avalible fund</Text>
              </Left>
              <Right>
                {amount}
              </Right>
            </CardItem>
            <CardItem bordered>
              <Icon
                type="Ionicons"
                name="swap"
                style={{color: "#6b52ae"}}
              />
              <Left>
                <Text>Last transaction</Text>
              </Left>
              <Right>
                <Text>0</Text>
              </Right>
            </CardItem>
          </Card>
          <View style={{flexDirection: "row", marginTop: "auto"}}>
            <Button
              rounded
              style={styles.buttonStyles}
              onPress={() => this.props.navigation.navigate('AddFund')}
            >
              <Text>Add fund</Text>
            </Button>
            <Button
              rounded
              style={styles.buttonStyles}
              onPress={() => this.props.navigation.navigate('ExtractFund')}
            >
              <Text>Extract fund</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyles: {
    flex: 1,
    margin: 2,
    backgroundColor: "#6b52ae"
  }
});

const mapStateToProps = state => {
  return {
    funds: state.funds.funds,
    isLoading: state.ui.isLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFunds: () => dispatch(fetchFunds())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);