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
    TextInput,
    TouchableOpacity
} from 'react-native';

import iconMenu from '../../../media/icon/ic_menu.png';
import iconTopCart from '../../../media/icon/ic_logo.png';


export default class Header extends Component {

    openDrawer = () => {
        const { open } = this.props;
        open();
    }

    goHome = () => {

    }

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.header_top}>
                    <View style={styles.icon_menu}>
                        <TouchableOpacity 
                                onPress={ this.openDrawer }
                            >
                            <Image source={iconMenu} style={{width: 32, height: 32}} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logo}>
                        <TouchableOpacity 
                                onPress={ this.goHome }
                            >
                            <Text style={styles.logoText}>Wearing a Dress</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.icon_cart}>
                        <TouchableOpacity 
                                onPress={ this.goHome }
                            >
                            <Image source={iconTopCart} style={{width: 32, height: 32}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.search}>
                    <TextInput style={styles.textInput} />
                </View>
                
            </View>
        );
    }
};

const styles = StyleSheet.create({
	header: {
        backgroundColor: "#34B089",
        padding: 10
    },
    header_top: {
        flexDirection: "row",
        marginBottom: 7,
        justifyContent: "space-between"
    },
    search: {

    },
    textInput: {
        height: 40, 
        borderColor: '#ddd', 
        borderWidth: 1,
        backgroundColor: "#fff",
        marginBottom: 5
    },
    icon_menu: {

    },
    logo: {
        justifyContent: "center",
        alignItems: "center"
    },
    logoText: {
        color: "#fff",
        fontSize: 20
    },  
    icon_cart: {

    }
});
