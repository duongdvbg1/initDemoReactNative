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

export default class Contact extends Component {
    render() {
        return (
            <View style={styles.contact}>
                <Text>Contact</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
	contact: {
        backgroundColor: "pink",
        flex: 1
    },
});
