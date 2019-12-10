/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

export default class Search extends Component {
    render() {
        return (
            <View style={styles.search}>
                <Text>Search</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
	search: {
        backgroundColor: "blue",
        flex: 1
    },
});
