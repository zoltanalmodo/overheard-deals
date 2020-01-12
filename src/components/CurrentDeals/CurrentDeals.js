import React, { useContext }  from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import DealCard from '../DealCard/DealCard'

import { Context as AuthContext } from '../../context/AuthContext'


const CurrentDeals = () => {

    const { state } = useContext( AuthContext );

    // const currentDeals = ;

    return (

        state.dealsArray.filter(deal => deal.category.includes(state.category))

    );
};

export default CurrentDeals;




 