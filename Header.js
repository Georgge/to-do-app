import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> header </Text>
        <TextInput
          placeholder="Write here"
          style={styles.textInput}
          onChangeText={ this.props.changeText }
        />
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#00796b',
    paddingHorizontal: 16,
  },
  textInput: {
    paddingHorizontal: 16,
  },
});

export default Header;
