import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import backimage from '../../src/img/newbg.png';

import { Context as AuthContext } from '../../src/context/AuthContext';

import OverheardDealsLogo2 from '../../src/components/OverheardDealsLogo2';

const SignUpFormScreen = ({navigation}) => {

    // add 'signup' action to AuthContext !
    const { state, signup } = useContext(AuthContext);


    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [university, setUniversity] = useState('');
    const [gradYear, setGradYear] = useState('');

        
    return (

        <ImageBackground source={backimage} style={styles.container}>
            
            <View style={styles.logoPosition}>
                <OverheardDealsLogo2 />
            </View>

        <View style={styles.fullNameTextInputPositionCenter}>
            <View style={styles.fullNameTextInputPosition}>
            
                <TextInput
                    value={name}
                    onChangeText = {(newName) => setName(newName)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.nameTextInput}
                    label='Name'
                    placeholder='Name'
                    placeholderTextColor='black'
                    keyboardAppearance='dark'
                    keyboardType='default'
                    returnKeyType='done'
                    clearTextOnFocus={true}
                />
            
                <TextInput
                    value={lastName}
                    onChangeText = {(newLastName) => setLastName(newLastName)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.lastNameTextInput}
                    label='Last Name'
                    placeholder='Last Name'
                    placeholderTextColor='black'
                    keyboardAppearance='dark'
                    keyboardType='default'
                    returnKeyType='done'
                    clearTextOnFocus={true}
                />
            </View>
        </View>

            <View style={styles.emailTextInputPosition}>
                <TextInput
                    value={email}
                    onChangeText = {(newEmail) => setEmail(newEmail)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.emailTextInput}
                    label='email'
                    placeholder='email'
                    placeholderTextColor='black'
                    keyboardAppearance='dark'
                    keyboardType='email-address'
                    returnKeyType='done'
                    clearTextOnFocus={true}
                />
            </View>

            <View style={styles.phoneTextInputPosition}>
                <TextInput
                    value={mobileNumber}
                    onChangeText = {setmobileNumber}

                    style={styles.phoneTextInput}
                    label='Mobile Number'
                    placeholder='Mobile Number'
                    placeholderTextColor='black'
                    keyboardAppearance='dark'
                    keyboardType='phone-pad'
                    returnKeyType='done'
                    clearTextOnFocus={true}
                />
            </View>

            {/* <View style={styles.passwordTextInputPosition}>
                <TextInput
                    value={password}
                    onChangeText = {setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.passwordTextInput}
                    label='password'
                    placeholder='password'
                    placeholderTextColor='black'
                    keyboardAppearance='dark'
                    keyboardType='default'
                    returnKeyType='done'
                    clearTextOnFocus={true}
                    secureTextEntry={true}
                />
            </View> */}

            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}

            <View style={styles.genderButtonPositionCenter}>
                <View style={styles.genderButtonPosition}>

                    <TouchableOpacity
                        // onPress={() => navigation.navigate('RepLoginScreen')}
                    >              
                            <Text style={styles.repLoginButton}>female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('MerchantLoginScreen')}
                    >                    
                            <Text style={styles.merchantLoginButton}>male</Text>                    
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('MerchantLoginScreen')}
                    >                    
                            <Text style={styles.merchantLoginButton}>other</Text>                    
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.modalDropdownPosition}>
                <ModalDropdown
                    value = {university}
                    onSelect = {(newUniversity) => setUniversity(
                        newUniversity === '0' ? 'University of Cardiff' :
                        newUniversity === '1' ? 'University of South Wales' :
                        newUniversity === '2' ? 'Cardiff Metropolitan University' :
                        'Error SetUniversity'
                        )}
                    
                    defaultValue={'University'}
                    options={['University of Cardiff', 'University of South Wales', 'Cardiff Metropolitan University']}
                    style={styles.modalDropdown}
                    textStyle={styles.modalDropdownText}
                    dropdownStyle={styles.modalDropdownDropdownBox}
                    dropdownTextStyle={styles.modalDropdownDropdownTextStyle}
                    dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                />
            </View>

            <View style={styles.modalDropdown2Position}>
                <ModalDropdown
                    value = {gradYear}
                    onSelect = {(newGradYear) => setGradYear(
                        newGradYear === '0' ? '2020' :
                        newGradYear === '1' ? '2021' :
                        newGradYear === '2' ? '2022' :
                        newGradYear === '3' ? '2023' :
                        newGradYear === '4' ? '2024' :
                        newGradYear === '5' ? '2025' :
                        newGradYear === '6' ? '2026' :
                        newGradYear === '7' ? '2027' :
                        newGradYear === '8' ? '2028' :

                        'Error SetGradYear'
                        )}
                    
                    defaultValue={'Grad Year'}
                    options={['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028']}
                    style={styles.modalDropdown2}
                    textStyle={styles.modalDropdownText}
                    dropdownStyle={styles.modalDropdownDropdown2Box}
                    dropdownTextStyle={styles.modalDropdownDropdownTextStyle}
                    dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                />
            </View>

                <View style={styles.forgotPasswordPosition}>
                        <View style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>I confirm I would like to be sent updates on new deals from Overheard Network Ltd, including Overheard Deals, Overheard Events & Overheard Festivals, I know I can unsubscribe at any time.</Text>
                        </View>
                </View>
                <View style={styles.forgotPasswordPosition}>
                        <View style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>I am interested in earning money by becoming an ambassador and would like to be sent more information on this.</Text>
                        </View>
                </View>

            <TouchableOpacity
                // onPress={() => signup({ name, lastName, email, mobileNumber, gradYear })} 
                onPress={() => navigation.navigate('InviteExplanationScreen')}
            >
                <View style={styles.signUpButtonPosition}>
                    <Text style={styles.signUpButton}>Sign Up</Text>
                </View>
            </TouchableOpacity>
            
            
            

        </ImageBackground>

    );

};

SignUpFormScreen.navigationOptions = () => {
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
        marginTop: 30,
    },

    

    fullNameTextInputPosition: {
        width: 270,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fullNameTextInputPositionCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    nameTextInput: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 40,
        width: 130,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },
    
    lastNameTextInput: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 40,
        width: 130,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },

    emailTextInputPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    emailTextInput: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 40,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },

    phoneTextInputPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    phoneTextInput: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 40,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },

    passwordTextInputPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    passwordTextInput: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 40,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },

    modalDropdownPosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalDropdown2Position: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalDropdown: {
        height: 40,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },
    modalDropdown2: {
        height: 40,
        width: 155,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },
    modalDropdownText: {
        marginTop: 8,
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
    },
    modalDropdownDropdownBox: {
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
        margin: -2,
    },
    modalDropdownDropdown2Box: {
        width: 155,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
        margin: -2,
    },
    modalDropdownDropdownTextStyle: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        backgroundColor: '#ECECEC',
        left: -2,
    },
    dropdownTextHighlightStyle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '800',
        color: 'white',
        backgroundColor: 'black',
        left: 0,
    },

    errorMessage: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 18,
        color: 'red',
    },
    
    signUpButtonPosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signUpButton: {
        textAlign: 'center',
        paddingTop: 4,
        fontSize: 24,
        fontWeight: 'bold',
        color:  'black',
        height: 40,
        width: 155,
        borderColor: '#FF8D4F',
        borderWidth: 2,
        backgroundColor: '#FF8D4F',

        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,

    },

    genderButtonPositionCenter: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    forgotPasswordPosition: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    forgotPasswordText: {
        width: 270,
        textAlign: 'center',
        fontSize: 10,
    },

    newUserPosition: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    newUserText: {
        textAlign: 'center',
        fontSize: 18,
    },
    
    genderButtonPosition: {
        marginTop: 10,
        width: 270,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    repLoginButton: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color:  'black',
        // height: 50,
        // width: 270,
        // borderColor: '#ECECEC',
        // borderWidth: 2,
        // backgroundColor: '#ECECEC',

        // shadowColor: '#ababab',
        // shadowOffset: {width: 4, height: 4},
        // shadowOpacity: 1,
        // shadowRadius: 0,
    },

    merchantLoginButton: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color:  'black',
        // height: 50,
        // width: 270,
        // borderColor: '#ECECEC',
        // borderWidth: 2,
        // backgroundColor: '#ECECEC',

        // shadowColor: '#ababab',
        // shadowOffset: {width: 4, height: 4},
        // shadowOpacity: 1,
        // shadowRadius: 0,
    },

});

export default SignUpFormScreen;