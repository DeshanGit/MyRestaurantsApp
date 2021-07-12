import React, { useContext, useState } from 'react';
import {
  ScrollView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Button,
  ToastAndroid,
} from 'react-native';

import { isValidField, isValidEmail } from '../../validations/Validations';
import { AuthContext } from '../../auth/AuthProvider';
import CustomButton from '../../components/custombutton/CustomButton';
import styles from './Styles';

const Login = ({navigation}) => {

    const {fbLogin} = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState({
        email:'',
        password:'',
    });

    const {email, password} = userInfo

    const [error, setError] = useState({
        emailError:'',
        passwordError:'',
    });

    const {emailError, passwordError} = error


    const handleOnChangeText =(value,fieldName) => {
        setUserInfo({...userInfo,[fieldName]:value})
        if(fieldName === 'email') setError({...error,emailError:'',})
        if(fieldName === 'password') setError({...error,passwordError:'',})
    }

    const updateError =(value,fieldName) => {
        setError({...error,[fieldName]:value})
    }


    const isValidForm = () => {
       
        setError({
            ...error,
            emailError : (!isValidField(email)) ? 'User name is required!': (!isValidEmail(email)) ? 'Invalid email!' : '',
            passwordError : (!isValidField(password)) ? 'Password is required!' : '',
        })

        if(!isValidField(email)) return 
        if(!isValidField(password)) return 
        if(!isValidEmail(email)) return 

        return true;

    }


    const submitForm = () => {
        if(isValidForm()){
            navigation.replace('Tabs')
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.topLayout}>
                <Text style={styles.titleText}>LOGIN</Text>
            </View>
            <View style={styles.bottomLayout}>

                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput}
                        placeholder='User Name'
                        placeholderTextColor="#acacac"
                        value={email}
                        onChangeText={(value)=>handleOnChangeText(value,'email')}
                        />
                    <Text style={styles.errorMsg}>
                        {emailError}
                    </Text> 
                </View>

                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput}
                        placeholder='Password'
                        placeholderTextColor="#acacac"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(value)=>handleOnChangeText(value,'password')}
                        />
                    <Text style={styles.errorMsg}>
                       {passwordError}
                    </Text>    
                </View>

                <CustomButton onPress={submitForm} text='Login' buttonColor='#00c6f1'/>
                <CustomButton onPress={fbLogin} text='Sign In with Facebook' buttonColor='#1877F2'/>
            </View>
        </View>
    );

}

export default Login;