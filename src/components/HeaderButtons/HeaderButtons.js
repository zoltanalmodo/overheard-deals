import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';
import AnimatedArrow from '../AnimatedArrow';

import { Context as AuthContext } from '../../context/AuthContext';


const HeaderButtons = () => {

    const { displayPopUpProfile, setCategory } = useContext(AuthContext);

    return (

        <View style={styles.topNavBar}>

            <TouchableOpacity style={styles.touchableOpacity}
                    // onPress={ () => displayPopUpDealsMenu() }
            >

                <View style={styles.categoriesButtonBox}>

                    <ModalDropdown
                        defaultValue={'Deals Menu'}

                        onSelect = {(newCategories) => setCategory(
                            newCategories === '0' ? 'All Deals' :
                            newCategories === '1' ? 'Alcohol' :
                            newCategories === '2' ? 'Events & Festivals' :
                            newCategories === '3' ? 'Fashion & Shopping' :
                            newCategories === '4' ? 'Food & Drink' :
                            newCategories === '5' ? 'Hair & Beauty' :
                            newCategories === '6' ? 'Health & Fitness' :
                            newCategories === '7' ? 'Lifestyle' :
                            newCategories === '8' ? 'Taxis & Cars' :
                            newCategories === '9' ? 'Technology' :
                            'error setCategories'
                        )}

                        options={[
                            'All deals',
                            'Alcohol',
                            'Events & Festivals',
                            'Fashion & Shopping',
                            'Food & Drink',
                            'Hair & Beauty',
                            'Health & Fitness',
                            'Lifestyle',
                            'Taxis & Cars',
                            'Technology',
                        ]}
                        
                        textStyle={styles.modalButtonText}
                        
                        dropdownStyle={styles.modalDropdownDropdownBox}
                        dropdownTextStyle={styles.modalDropdownDropdownTextStyle}
                        dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                    />

                    <View style={styles.arrowAnimationBox}>
                        
                            <AnimatedArrow />
                        
                    </View>

                </View>

            </TouchableOpacity>
                    
            <TouchableOpacity style={styles.touchableOpacity}           
                onPress={ () => displayPopUpProfile() }
            >
                    
                <View style={styles.profileButtonBox}>
                    <Text style={styles.profileButtonText}>Profile</Text>
                </View>

            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    topNavBar: {
        height: 34,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1.5,
        marginTop: 2,
        borderColor: 'black',
    },


// Header Buttons styling  ==================start


    categoriesButtonBox: {
        height: 34,
        width: 222,
        top: 1,
        // backgroundColor: 'white',
        flexDirection: 'row'
    },

    profileButtonBox: {
        height: 34,
        width: 111,
        top: 1,
    },

    profileButtonText: {
        fontWeight: '400',
        textAlign: 'right',
        paddingRight: 10,
        fontSize: 14,
        paddingTop: 6,
    },

    

// Header Buttons styling   ====================end



// Modal Dropdown panel stylinng   ===========start

    modalButtonText: {
        fontWeight: '800',
        textAlign: 'left',
        fontSize: 16,
        paddingTop: 5,
        paddingLeft: 10,
        color: 'black',
    },

    modalDropdownDropdownBox: {
        width: 282,
        height: 525,
        borderColor: 'black',
        backgroundColor: 'hsla(157, 70%, 84%, 0.89)',
        borderWidth: 2,
        marginLeft: -2,
        marginTop: 7,
    },

    modalDropdownDropdownTextStyle: {
        textAlign: 'left',
        paddingLeft: 10,
        fontSize: 20,
        backgroundColor: 'hsla(157, 70%, 84%, 0.01)',
        fontWeight: '800',
        color: 'black',
    },

    dropdownTextHighlightStyle: {
        textAlign: 'left',
        fontSize: 20,
        paddingLeft: 10,
        fontWeight: '800',
        color: 'white',
        backgroundColor: 'black',
    },

// Pop Up panel stylinng    =============end

});

export default HeaderButtons;