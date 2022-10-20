import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';

import Spacer from "./Spacer";

const AuthForm = ({headerText, buttonText, errorMessage, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <>
        <Spacer>
            <Text h3>{headerText}</Text>
        </Spacer>
        <Input
            label='Email'
            value={email}
            onChangeText={newEmail => setEmail(newEmail)}
            autoCorrect={false}
            autoCapitalize='none'
        />
        <Spacer/>
        <Input
            label='Password'
            secureTextEntry
            value={password}
            onChangeText={newPassword => setPassword(newPassword)}
            autoCorrect={false}
            autoCapitalize='none'
        />
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <Spacer>
            <Button title={buttonText} onPress={() => onSubmit({email, password})}/>
        </Spacer>
    </>
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    },
});

export default AuthForm;