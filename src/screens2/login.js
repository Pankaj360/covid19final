import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "../LoadingScreen";
import LoginScreen from "../LoginScreen";
import RegisterScreen from "../RegisterScreen";
import Dashboard from "../Dashboard";

import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAPHciVq6ANV-b9uJo-VpvrssvdUDOyc0A",
    authDomain: "covid19login-97cef.firebaseapp.com",
    databaseURL: "https://covid19login-97cef.firebaseio.com",
    projectId: "covid19login-97cef",
    storageBucket: "covid19login-97cef.appspot.com",
    messagingSenderId: "204732501060",
    appId: "1:204732501060:web:95e1716c26fa64204b0011"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
    Home: Dashboard
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
