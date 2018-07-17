import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Write here"
          onChangeText={this.props.changeText}
          onSubmitEditing={this.props.add}
          value={this.props.text}
          style={styles.textInp}
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
  textInp: {
    fontSize: 24,
  },
});

export default Header;
