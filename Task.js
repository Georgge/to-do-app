import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


class Task extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.item.text} </Text>
        <TouchableOpacity onPress={() => this.props.delete(this.props.item.key)}>
          <Ionicons
            name="md-trash"
            size={24}
            color="red"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
  },
});

export default Task;
