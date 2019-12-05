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

export default class Content extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.topLeft}>

                    </View>
                    <View style={styles.topRight}>
                        <Text style={styles.text}>Right</Text>
                    </View>
                </View>
                <View style={styles.bottom}>

                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
	container: {
        flexDirection: "column",
        width: '100%',
        height: 500
    },
    top: {
        flexDirection: "row",
        flex: 5,
    },
    topLeft: {
        flex: 2,
        backgroundColor: '#ddd',
    },
    topRight: {
        flex: 5,
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center",
        
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    bottom: {
        flexDirection: "row",
        flex: 5,
        backgroundColor: 'blue'
    }
});
