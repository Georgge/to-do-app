import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> body </Text>
        <FlatList
          data={this.props.tasks}
          renderItem={ 
            ({item}) => <Text> {item.text} </Text>
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
  },
});

export default Body;
