import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

import backimage from '../../src/img/newbg.png';

import OverheardDealsLogo2 from '../../src/components/OverheardDealsLogo2';



const InviteExplanationScreen = ({navigation}) => {

    return (

        <ImageBackground source={backimage} style={styles.container}>
            
            <View style={styles.logoPosition}>
                <OverheardDealsLogo2 />
            </View>

            <View style={styles.epicDealsText1Position}>
                <Text style={styles.epicDealsText}>We've hustled over 70 deals for you</Text>
            </View>
            <View style={styles.epicDealsText2Position}>
                <Text style={styles.epicDealsText}>and you can use them FOR FREE</Text>
            </View>
            <View style={styles.epicDealsText2Position}>
                <Text style={styles.epicDealsText}>all you need to do is tell 5 mates about us</Text>
            </View>
            <View style={styles.epicDealsText2Position}>
                <Text style={styles.epicDealsText}>then they can start saving too!</Text>
            </View>
            <View style={styles.epicDealsText2Position}>
                <Text style={styles.epicDealsText}>WIN / WIN!</Text>
            </View>




            

            

            <TouchableOpacity
                onPress={() => navigation.navigate('InviteForAccessScreen')}
            >
                <View style={styles.inviteButtonPosition}>
                    <Text style={styles.inviteButton}>Invite Your Mates For Access</Text>
                </View>
            </TouchableOpacity>
            
            
            

        </ImageBackground>

    );

};

InviteExplanationScreen.navigationOptions = () => {
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

    
    epicDealsText1Position: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    epicDealsText2Position: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    epicDealsText: {
        width: 270,
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 20,
    },
    
    inviteButtonPosition: {
        marginTop: 60,
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

export default InviteExplanationScreen;