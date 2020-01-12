import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import { Context as AuthContext } from '../../context/AuthContext';



const DealCardPopUpQR = ({navigation}, props) => {

    const { state } = useContext(AuthContext)

    return (
    
        <View style={styles.dealPopUpCardPosition}>
        
            <View style={styles.dealImagePosition}>
                <View>                  

                    <QRCode
                        value={state.userObject.id}
                        size={258}
                        color="black"
                        backgroundColor="white"
                    />

                </View>
            </View>

            <View style={styles.dealDescriptionPosition}>
                <View style={styles.dealDescriptionPanel}>
                    <View style={styles.instructionsPosition}>
                        <Text style={styles.instructions}>
                            Please Present
                            This Code
                            To The Merchant
                            To Claim This Deal
                        </Text>
                    </View>
                </View>
            </View>

        </View>

    );
};


DealCardPopUpQR.navigationOptions = () => {
    return {
        header: null
    };
};


const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    dealPopUpCardPosition: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 569,
        width: 260,
        borderColor: 'grey',
        borderWidth: 1,
    },
    dealImagePosition: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dealDescriptionPosition: {
        marginTop: -1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dealDescriptionPanel: {
        width: 258,
        height: 310,
        paddingLeft: 5,
        paddingRight: 5,
        borderTopWidth: 1,
        borderColor: 'gray',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    instructionsPosition: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    instructions: {
        marginTop: 90,
        fontSize: 24,
        textAlign: 'center',
        color: 'black',
        fontWeight: '800',
    },

});

export default DealCardPopUpQR;