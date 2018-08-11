import React, { Component } from 'react';
import { Container, Content, DatePicker, Form, Item, Input, Label, Text } from 'native-base';
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
    this.setState({ chosenDate: newDate });
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
              <Text>{moment(this.state.chosenDate).format('MMMM Do YYYY')}
              </Text>
              <DatePicker
              style={{ textAlign: 'center', float: 'left' }}
              defaultDate={new Date()}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.setDate}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
