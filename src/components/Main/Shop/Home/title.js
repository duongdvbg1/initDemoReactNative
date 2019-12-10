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
    Text
} from 'react-native';

export default class Title extends Component {
    render() {

        const { title } = this.props;

        return (
            <View style={styles.headTitle}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    headTitle: {
        padding: 10,
        justifyContent: "center",
    },
    title: {
        textTransform: "uppercase",
        fontSize: 20,
        color: "#afafaf"
    },
});
