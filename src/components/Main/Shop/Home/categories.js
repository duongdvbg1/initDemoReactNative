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
import Swiper from 'react-native-swiper';
import Title from './title';

import bannerCat1 from '../../../../media/images/maxi.jpg';
import bannerCat2 from '../../../../media/images/fit.jpg';
import bannerCat3 from '../../../../media/images/midi.jpg';
import bannerCat4 from '../../../../media/images/mini.jpg';

const { height, width } = Dimensions.get('window');

export default class Categories extends Component {
    render() {
        return (
            <View style={styles.categories}>
                <Title title="List Categories" />
                <View style={styles.banner}>
                    <Swiper style={styles.wrapper} 
                        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        activeDot={<View style={{backgroundColor: '#34B089', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        paginationStyle={{
                            bottom: 20
                          }}
                        showsPagination = {true}
                        autoplay = {true}
                        loop = { true }
                        autoplayDirection = { true }
                    >
                        <View style={styles.slide}>
                            <Text style={styles.bannerTittle}>Maxi Dress</Text>
                            <Image source={bannerCat1} style={styles.bannerCollection} />
                        </View>
                        <View style={styles.slide}>
                            <Text style={styles.bannerTittle}>Fit Dress</Text>
                            <Image source={bannerCat2} style={styles.bannerCollection} />
                        </View>
                        <View style={styles.slide}>
                            <Text style={styles.bannerTittle}>Midi Dress</Text>
                            <Image source={bannerCat3} style={styles.bannerCollection} />
                        </View>
                        <View style={styles.slide}>
                            <Text style={styles.bannerTittle}>Mini Dress</Text>
                            <Image source={bannerCat4} style={styles.bannerCollection} />
                        </View>
                    </Swiper>
                </View>
            </View>
        );
    }
};

const imageWidth = width - 40;
const imageHeight = (imageWidth / 719) * 333;

const styles = StyleSheet.create({
	categories: {
        height: height / 3,
        backgroundColor: "#fff",
        margin: 10,
        marginTop: 0,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        elevation: 7,
        flexDirection: "column"
    },
    banner: {
        flex: 4,
       padding: 10
    },
    bannerCollection: {
        width: imageWidth,
        height: imageHeight

    },
    container: {
        flex: 1
      },
    
    wrapper: {
        
    },
    
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    bannerTittle: {
        bottom: '50%',
        fontSize: 20,
        color: '#aaa',
        zIndex: 9,
        position: "absolute"
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        flex: 1
    }
});
