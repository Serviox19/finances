import React from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export const SingleTrans = ({ name, price, category }) => {
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: 'Image URL' }} />
      </Left>
      <Body>
        <Text>Transaction Title</Text>
        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
}
