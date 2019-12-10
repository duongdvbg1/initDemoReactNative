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

export default class Cart extends Component {
    render() {
        return (
            <View style={styles.cart}>
                <Text>Cart</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
	cart: {
        backgroundColor: "green",
        flex: 1
    },
});
