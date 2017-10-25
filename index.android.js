import {
	AppRegistry,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Alert
} from 'react-native'
import React from 'react'
import App from './App'

import { StackNavigator } from 'react-navigation'

const Test = props => {
	return (
		<View style={styles.container}>
			<Text>Other Page</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => props.navigation.goBack(null)}
			>
				<Text>Go Back</Text>
			</TouchableOpacity>
		</View>
	)
}

const SimpleApp = StackNavigator(
	{
		Home: {
			screen: App
		},
		Other: {
			screen: Test
		}
	},
	{
		headerMode: 'none'
	}
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 0,
		alignItems: 'center',
		backgroundColor: '#0f0'
	},
	button: {
		alignSelf: 'center',
		height: 60,
		backgroundColor: '#55ACEE'
	}
})

AppRegistry.registerComponent('BlackViewBug', () => SimpleApp)
