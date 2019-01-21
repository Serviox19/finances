import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Text, View } from 'native-base';
import { SingleTrans } from './SingleTrans';

class TransList extends Component {
  constructor(props) {
    super(props);
    this.props.transFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
    console.log(nextProps);
  }

  createDataSource(trans) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(trans);
  }

  renderRow(trans) {
    return <SingleTrans trans={trans} />;
  }

  render() {
    return (
      <React.Fragment>
        <View>
          <Text>Transaction List</Text>
        </View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = ({ trans }) => {
  return trans;
};

export default connect(mapStateToProps, actions)(TransList);
