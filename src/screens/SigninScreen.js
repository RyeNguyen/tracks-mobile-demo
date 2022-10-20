import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationEvents} from "react-navigation";

import {Context as AuthContext} from "../context/AuthContext";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage}/>
        <AuthForm
            headerText='Sign In to Your Account'
            buttonText='Sign In'
            errorMessage={state.errorMessage}
            onSubmit={signin}
        />
        <NavLink
            text='Do not have an account? Sign up instead.'
            routeName='Signup'
        />
    </View>
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;