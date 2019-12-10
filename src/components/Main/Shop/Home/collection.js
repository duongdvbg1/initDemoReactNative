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
    Image,
    Dimensions
} from 'react-native';
import Title from './title';
import bannerCollection from '../../../../media/images/banner.jpg';

const { height, width } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        return (
            <View style={styles.collection}>
                <Title title="Spring Collection" />
                <View style={styles.banner}>
                    <Image source={bannerCollection} style={styles.bannerCollection} />
                </View>
            </View>
        );
    }
};

const imageWidth = width - 40;
const imageHeight = (imageWidth / 719) * 333;

const styles = StyleSheet.create({
	collection: {
        height: height / 3,
        backgroundColor: "#fff",
        margin: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        elevation: 7,
        flexDirection: "column"
    },
    banner: {
        flex: 4,
        padding: 10,
        paddingTop: 0
    },
    bannerCollection: {
        width: imageWidth,
        height: imageHeight

    }
});
