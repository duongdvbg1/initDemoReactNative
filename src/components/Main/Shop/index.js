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
	View
} from 'react-native';
import Header from './header';
import NavTab from './navTab';

export default class Shop extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <View style={styles.shop}>
                <Header open={ this.props.open }  />
                <NavTab/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
	shop: {
        flex: 1
    },
});
