import React from 'react';
import { StyleSheet } from 'react-native';

import * as Animatable from 'react-native-animatable';



const AnimatedArrow = () => {
    return (
        <Animatable.Text
            style={styles.arrowAnimation}
            animation="bounce"
            iterationCount='infinite'
            direction="normal"
            duration={2000}
            delay={500}
            easing='ease-in-quad'
            >
                ▼
                
        </Animatable.Text>
    );
};

const styles = StyleSheet.create({

    arrowAnimation: {
        fontWeight: '400',
        textAlign: 'right',
        paddingLeft: 4,
        fontSize: 15,
        paddingTop: 7,
    },
    
})


export default AnimatedArrow;