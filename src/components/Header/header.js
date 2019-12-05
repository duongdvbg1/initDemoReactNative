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

import {
	Colors
} from 'react-native/Libraries/NewAppScreen';

export default class Header extends Component {
    render() {
        const { name } = this.props;
        return (
            <View style={styles.engine}>
                <Text style={styles.header}>{name}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.lighter,
        textAlign: "center",
        fontSize: 30,
        paddingBottom: 30,
        paddingTop: 30
    }
});

