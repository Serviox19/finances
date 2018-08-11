import React, { Component } from 'react';
import { AlertIOS, StyleSheet, TouchableHighlight } from 'react-native';
import { Container, Content, Body,
Button, Header, Left, Title, Text, Right, Icon } from 'native-base';
import { ModalComponent } from '../components/Modal';
import ExpensesForm from '../components/ExpensesForm';

export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <Left></Left>
          <Body>
            <Title>Transactions</Title>
          </Body>
          <Right>
            <TouchableHighlight>
              <Icon
                style={{ paddingRight: 10 }}
                name='md-add'
                onPress={() => this.toggleModal() }
              />
            </TouchableHighlight>
          </Right>
        </Header>
        <Container style={{ paddingTop: 15 }}>
          <Content padder>
            <Text>Transactions Screen</Text>
            <ModalComponent
              modalVisible={this.state.modalVisible}
              toggleModal={() => this.toggleModal(!this.state.modalVisible)}>
              <Text style={{ textAlign: 'center' }}>Please enter an Expense or Purchase</Text>
              <ExpensesForm />
            </ModalComponent>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
