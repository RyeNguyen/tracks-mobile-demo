import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {SafeAreaView} from "react-navigation";
import {EvilIcons} from '@expo/vector-icons';

import {Context as AuthContext} from "../context/AuthContext";

import Spacer from "../components/Spacer";

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return <SafeAreaView forceInset={{top: 'always'}}>
        <Text h1>AccountScreen</Text>
        <Spacer>
            <Button title='Sign Out' onPress={signout}/>
        </Spacer>
    </SafeAreaView>
}

AccountScreen.navigationOptions = {
    tabBarIcon: <EvilIcons name='gear' size={20}/>
}

const styles = StyleSheet.create({});

export default AccountScreen;