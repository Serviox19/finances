import React from 'react';
import { Alert, View, Modal, TouchableOpacity } from 'react-native';
import { Container, Content, Body,
  Header, Icon, Title, Text } from 'native-base';

export const ModalComponent = ({ modalVisible, toggleModal }) => {
  return (
    <Container style={{ paddingTop: 15 }}>
      <Content padder>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
        >
          <Container style={{ paddingTop: 15 }}>
            <View style={styles.closeView}>
              <TouchableOpacity
                onPress={toggleModal}>
                <Icon name='ios-close'
                  style={{fontSize: 50, color: 'black'}}/>
              </TouchableOpacity>
            </View>
            <Content padder>
              <Text>Modal</Text>
            </Content>
          </Container>
        </Modal>
      </Content>
    </Container>
  );
}

const styles = {
  modalContainer: {
    marginTop: 25,
    flexDirection: 'column',
  },
  closeView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 25
  }
}
