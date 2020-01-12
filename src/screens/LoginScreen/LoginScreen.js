import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

import backimage from '../../img/newbg.png';

import { Context as AuthContext } from '../../context/AuthContext';
import axios from 'axios';

import OverheardDealsLogo2 from '../../components/OverheardDealsLogo2';


const LoginScreen = ({navigation}) => {

    const { state, login, setDealsArray } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function fetchDealsArray() {

        // var is used to shadow the global variable, DO NOT change it to const or let
        var deals = await axios.get('http://206.189.17.158:8080/card/all-ajax');

        setDealsArray(deals.data);
        //console.log(deals.data);
        
    };


    useEffect(() => {
        fetchDealsArray();        
    }, []);

    
    return (

        <ImageBackground source={backimage} style={styles.container}>
            
            <View style={styles.logoPosition}>
                <OverheardDealsLogo2 />
            </View>


            <TouchableOpacity onPress={() => navigation.navigate('SignUpFormScreen')}>

                <View style={styles.signUpButtonPosition}>
                    <Text style={styles.signUpButton}>Sign Up For Free</Text>
                </View>

            </TouchableOpacity>

            <View style={styles.first500TextPosition}>
                <Text style={styles.first500Text}>*first 500 sign ups only</Text>
            </View>

            <View style={styles.epicDealsText1Position}>
                <Text style={styles.epicDealsText}>to get access to 70+</Text>
            </View>
            <View style={styles.epicDealsText2Position}>
                <Text style={styles.epicDealsText}>epic deals in Cardiff</Text>
            </View>


            <View style={styles.alreadyAMemeberTextPosition}>
                <Text style={styles.alreadyAMemeberText}>Already a member?</Text>
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
            
            <View style={styles.passwordTextInputPosition}>
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
            </View>

            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}

            <TouchableOpacity
                onPress={() => login({ email, password })} 
            >
                <View style={styles.loginButtonPosition}>
                    <Text style={styles.loginButton}>Login</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')} >
                <View style={styles.forgotPasswordPosition}>
                        <View style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                        </View>
                </View>
            </TouchableOpacity>
            
            <View style={styles.loginButtonPosition}>
                <View style={styles.repMerchantLoginButtonPosition}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('RepLoginScreen')}>              
                            <Text style={styles.repLoginButton}>Rep Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MerchantLoginScreen')}>                    
                            <Text style={styles.merchantLoginButton}>Merchant Login</Text>                    
                    </TouchableOpacity>

                </View>
            </View>

        </ImageBackground>

    );

};

LoginScreen.navigationOptions = () => {
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
        width: 270,
        borderColor: '#FF8D4F',
        borderWidth: 2,
        backgroundColor: '#FF8D4F',

        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,
    },

    first500TextPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    first500Text: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
    },

    epicDealsText1Position: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    epicDealsText2Position: {
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    epicDealsText: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 20,
    },

    alreadyAMemeberTextPosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    alreadyAMemeberText: {
        textAlign: 'center',
        fontSize: 16,
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

    errorMessage: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 18,
        color: 'red',
    },
    
    loginButtonPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginButton: {
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

    forgotPasswordPosition: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    forgotPasswordText: {
        textAlign: 'center',
        fontSize: 16,
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
    
    repMerchantLoginButtonPosition: {
        marginTop: 85,
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


export default LoginScreen;