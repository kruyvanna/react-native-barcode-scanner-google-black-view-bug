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
			<Text>Hello</Text>
			<TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
				<Text>Go To Scanner</Text>
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
	container2: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		justifyContent: 'space-between'
	},
	preview: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#000'
	},
	capture: {
		flex: 0,
		width: 60,
		height: 60,
		marginTop: 5,
		borderRadius: 30,
		backgroundColor: 'white'
	},
	photoLabel: {
		padding: 2,
		backgroundColor: '#00000020',
		color: 'white'
	},
	doneIcon: {
		marginTop: 20,
		display: 'flex',
		alignItems: 'center'
	},
	button: {
		alignSelf: 'center'
	},
	cameraType: {
		alignSelf: 'flex-end'
	}
})

AppRegistry.registerComponent('BlackViewBug', () => SimpleApp)
