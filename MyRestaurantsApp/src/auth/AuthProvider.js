import React, {createContext, useState} from 'react';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => { //TO DO - Authentication via Firebase / Sign in via firebase
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (error) {
                        console.log(error);
                    }
                },
                fbLogin: async () => {
                    try {
                        
                        // Attempt login with permissions
                        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

                        if (result.isCancelled) {
                            throw 'User cancelled the login process';
                        }

                        // Once signed in, get the users AccesToken
                        const data = await AccessToken.getCurrentAccessToken();

                        if (!data) {
                            throw 'Something went wrong obtaining access token';
                        }

                        // Create a Firebase credential with the AccessToken
                        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

                        // Sign-in the user with the credential
                        await auth().signInWithCredential(facebookCredential);

                    } catch (error) {
                        console.log(error);
                    }
                },
                register: async (email, password) => { //TO DO - Authentication via Firebase / Sign in via firebase
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch (error) {
                        console.log(error);
                    }
                },
                logout: async () => { //TO DO - Authentication via Firebase / Sign in via firebase
                    try {
                        await auth().signOut();
                    } catch (error) {
                        console.log(error);
                    }
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );

}