import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import LogoImage from '../../src/img/overhearddealslogo2.png';

const OverheardDealsLogo2 = () => {
    return (
        <View style={styles.logoBox}>
            <Image
                style={styles.logo}
                source={ LogoImage }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    logoBox: {
        height: 68,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        width: 185,
        height: 67,
    }
});

export default OverheardDealsLogo2;