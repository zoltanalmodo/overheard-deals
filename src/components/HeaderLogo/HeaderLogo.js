import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import LogoImage from '../../img/overhearddealslogo.png';

import { Context as AuthContext } from '../../context/AuthContext';



const HeaderLogo = () => {
    const { displayPopUpProfile } = useContext(AuthContext);
    return (
        <View style={styles.logoBar}>

            <Image
                style={styles.logo}
                source={ LogoImage }
            />

        </View>
    )
};

const styles = StyleSheet.create({
    logoBar: {
        height: 52,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
        paddingTop: 2,
    },
    logo: {
        width: 134,
        height: 48
    },

});

export default HeaderLogo;