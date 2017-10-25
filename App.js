import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native'

import BarcodeScanner from 'react-native-barcode-scanner-google'

export default class BarcodeApp extends Component {
  constructor(props) {
    super(props)
    this.state = { switched: false }
  }

  handleSwitch() {
    // this.setState({
    //   switched: !this.state.switched
    // });
    this.props.navigation.navigate('Other')
  }

  render() {
    const { switched } = this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleSwitch()}
        >
          <Text>Switch</Text>
        </TouchableOpacity>
        {switched ? (
          <Text>New Component</Text>
        ) : (
          <BarcodeScanner
            style={{ flex: 1 }}
            onBarcodeRead={({ data, type }) => {
              // handle your scanned barcodes here!
              // as an example, we show an alert:
              Alert.alert(`Barcode '${data}' of type '${type}' was scanned.`)
            }}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    borderBottomWidth: 1,
    borderColor: 'black'
  },
  button: {
    height: 60,
    backgroundColor: 'blue'
  },
  scanner: {
    flex: 1
  }
})
