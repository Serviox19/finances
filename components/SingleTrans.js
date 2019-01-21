import React from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export const SingleTrans = ({ trans }) => {
  return (
    <ListItem thumbnail>
      <Left></Left>
      <Body>
        <Text>{trans.title}</Text>
        <Text note numberOfLines={1}>{trans.price}</Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
}
