import React from 'react';
import { Dimensions, StyleSheet, ImageBackground } from 'react-native';

import backimage from '../../src/img/newbg.png';

import OverlayDealCard from 'react-native-modal-overlay';
import DealCardPopUp from '../../src/components/DealCardPopUp/DealCardPopUp';
import DealCardPopUpQR from '../components/DealCardPopUpQR/DealCardPopUpQR';

const deviceDisplayWidth = Dimensions.get('window').width;


const DealCardPopUpScreen = ({navigation}) => {
    return (
        <ImageBackground source={backimage} style={styles.container} >
            <OverlayDealCard
                containerStyle={ styles.containerStyleDealCard }
                visible={ true }
                onClose={ () => navigation.navigate('DealsScreen') }
                closeOnTouchOutside
                childrenWrapperStyle={ styles.childrenWrapperStyleDealCard }
                animationType={'zoomIn'}
                // animationOutType={'zoomOut'}
            >
                <DealCardPopUp />

            </OverlayDealCard>
        </ImageBackground>
    );
};

DealCardPopUpScreen.navigationOptions = () => {
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
        backgroundColor: 'hsla(120, 0%, 99%, 0)',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },
    childrenWrapperStyleDealCard: {

        flexDirection: 'column',
        justifyContent: 'center',

        marginLeft: (deviceDisplayWidth / 2),
        left: -130,
        marginRight: (deviceDisplayWidth / 2),
        right: -130,
        width: 260,
        height: 569,
        borderWidth: 1,
        borderColor: 'gray',
        position: 'absolute',
    },

});

export default DealCardPopUpScreen;