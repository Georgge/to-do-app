import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Task from './Task';

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.load &&
          <ActivityIndicator
            size='large'
            color="#8e44ad"
          />
        }
        <FlatList
          data={this.props.tasks}
          renderItem={ 
            ({item}) => <Task item={item} delete={this.props.delete} />
          }
        />
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#607d8b',
    padding: 16,
  },
  title: {
    fontSize: 26,
  },
});

export default Body;
