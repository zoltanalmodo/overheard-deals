import React from 'react';
import { View, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import backimage from '../../src/img/newbg.png';
import * as Animatable from 'react-native-animatable';

import OverlayDealCardQR from 'react-native-modal-overlay';

import DealCardPopUpQR from '../components/DealCardPopUpQR/DealCardPopUpQR';

const deviceDisplayWidth = Dimensions.get('window').width;


const DealCardPopUpQRScreen = ({navigation}) => {
    return (
        <ImageBackground source={backimage} style={styles.container} >
            
            
                <TouchableOpacity animation="zoomOut" style={styles.containerStyleDealCard}
                    onPress={ () => navigation.navigate('DealsScreen') }
                >

                    <View  style={styles.childrenWrapperStyleDealCard}>
                        <DealCardPopUpQR />
                    </View>

                </TouchableOpacity>
            
            
        </ImageBackground>
    );
};

DealCardPopUpQRScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 33,
        backgroundColor: 'white',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },
    containerStyleDealCard: {
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },
    childrenWrapperStyleDealCard: {
        marginLeft: (deviceDisplayWidth / 2),
        left: -130,
        marginRight: (deviceDisplayWidth / 2),
        right: -130,
    },

});

export default DealCardPopUpQRScreen;