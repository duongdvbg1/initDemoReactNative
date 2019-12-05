/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Image
} from 'react-native';

import {
	Colors,
} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header';
import Content from './src/components/Content';

const App = () => {
	return (
		<>
			<View>
				<Header name='Welcome To React Native'/>
				<Content />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
});

export default App;
