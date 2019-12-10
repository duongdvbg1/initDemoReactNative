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
	ScrollView
} from 'react-native';
import Collection from './collection';
import Categories from './categories';
import TopProduct from './topProduct';

export default class Home extends Component {
    render() {
        return (
            <ScrollView style={styles.home}>
                <Collection />
                <Categories />
                <TopProduct />
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
	home: {
        
    },
});
