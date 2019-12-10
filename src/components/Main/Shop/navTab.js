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
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Search from './Search';
import Contact from './Contact';
import Cart from './Cart';

import iconCart from '../../../media/icon/cart0.png';
import iconCartActive from '../../../media/icon/cart.png';
import iconHome from '../../../media/icon/home0.png';
import iconHomeActive from '../../../media/icon/home.png';
import iconSearch from '../../../media/icon/search0.png';
import iconSearchActive from '../../../media/icon/search.png';
import iconContact from '../../../media/icon/contact0.png';
import iconContactActive from '../../../media/icon/contact.png';

export default class NavTab extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <View style={styles.navTab}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        selectedTitleStyle={styles.selectTitle}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={iconHome} style={styles.iconTab} />}
                        renderSelectedIcon={() => <Image source={iconHomeActive} style={styles.iconTab} />}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        selectedTitleStyle={styles.selectTitle}
                        renderIcon={() => <Image source={iconCart} style={styles.iconTab} />}
                        renderSelectedIcon={() => <Image source={iconCartActive} style={styles.iconTab} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        selectedTitleStyle={styles.selectTitle}
                        renderIcon={() => <Image source={iconSearch} style={styles.iconTab} />}
                        renderSelectedIcon={() => <Image source={iconSearchActive} style={styles.iconTab} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        selectedTitleStyle={styles.selectTitle}
                        renderIcon={() => <Image source={iconContact} style={styles.iconTab} />}
                        renderSelectedIcon={() => <Image source={iconContactActive} style={styles.iconTab} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
};

const styles = StyleSheet.create({
	navTab: {
        backgroundColor: "#ccc",
        flex: 1
    },
    iconTab: {
        width: 24,
        height: 24
    },
    selectTitle: {
        color: "#34B089",
    }
});
