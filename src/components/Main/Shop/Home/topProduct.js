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

import sp1 from '../../../../media/images/sp1.jpeg';
import sp2 from '../../../../media/images/sp2.jpeg';
import sp3 from '../../../../media/images/sp3.jpeg';
import sp4 from '../../../../media/images/sp4.jpeg';

const { height, width } = Dimensions.get('window');
const productWidth = (width - 50)/2;
const productHeight = (productWidth/361)*452;

export default class TopProduct extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Title title="Top Producs" />
                <View style={styles.body}>
                    <View style={styles.product}>
                        <Image source={sp1} style={styles.productImage} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>Name product</Text>
                            <Text style={styles.productPrice}>$69</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <Image source={sp2} style={styles.productImage} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>Name product</Text>
                            <Text style={styles.productPrice}>$69</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <Image source={sp3} style={styles.productImage} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>Name product</Text>
                            <Text style={styles.productPrice}>$69</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <Image source={sp4} style={styles.productImage} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>Name product</Text>
                            <Text style={styles.productPrice}>$69</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
	container: {
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 0,
        elevation: 7
    },
    body: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 5,
        flexWrap: "wrap"
    },
    product: {
        width: productWidth,
    }, 
    productDetails: {
        padding: 10
    },
    productImage: {
        width: productWidth,
        height: productHeight
    },
    productName: {
        color: "#666"
    },
    productPrice: {
        color: "#666"
    }
});
