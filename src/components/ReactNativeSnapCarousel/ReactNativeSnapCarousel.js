import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CarouselData from '../CarouselData/CarouselData'


const ReactNativeSnapCarousel = () => {
    
    function Item({ content }) {
        return (
          <View>{ content }</View>
        );
    }

    return (

        <View style={styles.container}>
                                     
                <FlatList
                    initialNumToRender={2}
                    data={ CarouselData() }
                    renderItem={({ item }) => <Item content={item.content} />}
                    keyExtractor={item => String(item.key)}
                />

        </View>

    )
};

ReactNativeSnapCarousel.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: 88,
    },

});

export default ReactNativeSnapCarousel;