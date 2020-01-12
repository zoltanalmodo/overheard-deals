import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

import backimage from '../../src/img/newbg.png';
import OverheardDealsLogo2 from '../../src/components/OverheardDealsLogo2';



const InviteForAccessScreen = ({navigation}) => {

    return (

        <ImageBackground source={backimage} style={styles.container}>
            
            <View style={styles.logoPosition}>
                <OverheardDealsLogo2 />
            </View>
            
            

            <TouchableOpacity
                onPress={() => navigation.navigate('DealsScreen')} 
            >
                <View style={styles.inviteButtonPosition}>
                    <Text style={styles.inviteButton}>Invite & Continue to Deals</Text>
                </View>
            </TouchableOpacity>
            
        </ImageBackground>

    );

};

InviteForAccessScreen.navigationOptions = () => {
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
    logoPosition: {
        marginTop: 0,
    },

    
    
    inviteButtonPosition: {
        marginTop: 410,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inviteButton: {
        textAlign: 'center',
        paddingTop: 7,
        fontSize: 18,
        fontWeight: 'bold',
        color:  'black',
        height: 40,
        width: 270,
        borderColor: '#FF8D4F',
        borderWidth: 2,
        backgroundColor: '#FF8D4F',

        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,

    },

});

export default InviteForAccessScreen;