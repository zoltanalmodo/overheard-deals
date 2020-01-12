import React, { useContext }  from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import DealCard from '../DealCard/DealCard'

import { Context as AuthContext } from '../../context/AuthContext'



function chunkSlice(arrayToSlice, size) {
    const chunked_arr = [];
    var index = 0;
    while (index < arrayToSlice.length) {
    chunked_arr.push(arrayToSlice.slice(index, size + index));
    index += size;
    }
    return chunked_arr;
};



const _renderCarouselRow = ({item, index}) => {
    return (
        <View style={styles.slideCard}>
            <DealCard
                index = {index}
                _id = {item._id}
                key = {item._id}
                name = {item.name}
                img={item.img}
                lineOne={item.lineOne}
                lineTwo={item.lineTwo}
                lineThree={item.lineThree}
                mainOffer={item.mainOffer}
                offerSmall={item.offerSmall}
                buttonText={item.buttonText}
                categories={item.category}
                tags={item.tags}
                location={item.location}
                availability={item.availability}
                link={item.link}
                offline={!item.online}
                imageLabel={item.imageLabel}
                ticketsComingSoon={item.ticketsComingSoon}
            />
        </View>
    );
};



const CarouselData = () => {

    const { state } = useContext( AuthContext );
    const deviceDisplayWidth = Dimensions.get('window').width;

    const currentDeals = state.dealsArray.filter(deal => deal.category.includes(state.category));

    // console.log(currentDeals);
    
    return (
        [
            {   
                content:
                    
                    <View style={styles.centerContainer}>
                        <Carousel
                            data={chunkSlice(currentDeals, 6)[0]}
                            renderItem={_renderCarouselRow}
                            sliderWidth={deviceDisplayWidth}
                            sliderHeight={260}
                            itemWidth={140}
                            itemHeight={260}
                            loop={true}
    
                            contentContainerCustomStyle={{
                                height: 264,
                                marginTop: 5,
                                flexGrow: 0,
                            }}
                        />
                    </View>,
    
                key: 'string-000',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[1]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-001',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[2]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-002',
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[3]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-003',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[4]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-004',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[5]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-005',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[6]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-006',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[7]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-007',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[8]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-008',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[9]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-009',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[10]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-010',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[11]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-011',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[12]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-012',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[13]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-013',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[14]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-014',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[15]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-015',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[16]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-016',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[17]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-017',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[18]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-018',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[19]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-019',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[20]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-020',   
            },
            {   
                content:
    
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[21]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}
    
                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />,
                    
                key: 'string-021',   
            },
        ]
    );
};

const styles = StyleSheet.create({

    centerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },

    categoryText: {
        width: 160,
        height: 20,
        marginTop: 5,
        marginBottom: 2,
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
    },

    slideCard: {        
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },

});

export default CarouselData;