import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Container, Content, DatePicker, Form, Item, Input, Label, Text } from 'native-base';
import moment from 'moment';

export default class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenDate: new Date()
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    const formatted = moment(newDate).format('MMMM Do YYYY');
    console.log(formatted);
    this.setState({ chosenDate: formatted });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Description</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Amount</Label>
              <Input keyboardType="decimal-pad" />
            </Item>
            <Item fixedLabel>
              <Label>Vendor</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Date</Label>
              <DatePicker
              style={{ textAlign: 'center', float: 'left' }}
              defaultDate={new Date()}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText={moment(this.state.chosenDate).format('MMMM Do YYYY')}
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.setDate}
              />
            </Item>
            <View style={styles.buttonView}>
              <Button block light style={styles.firstButton}>
                <Text>Clear Form</Text>
              </Button>
              <Button block light>
                <Text>Add</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  buttonView: {
    marginTop: 50,
  },
  firstButton: {
    marginBottom: 10
  }
}
