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
    Text,
    View,
    DrawerLayoutAndroid,
    TouchableOpacity
} from 'react-native';

import Menu from './menu';
import Shop from './Shop';

class Main extends Component {
    
    static navigationOptions = {
        header: null
    };

    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }

    render() {
        var navigationView = (
          <Menu />
        );
        return (
            <DrawerLayoutAndroid 
                ref="myDrawer"
                drawerWidth={300}
                renderNavigationView={() => navigationView}
            >
                <Shop open = { this.openDrawer } />
          </DrawerLayoutAndroid>
        );
      }
};


export default Main;
