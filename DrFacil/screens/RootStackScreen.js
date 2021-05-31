import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import PruebaScreen from './PruebaScreen';
import PruebaScreen2 from './PruebaScreen2';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="PruebaScreen" component={PruebaScreen}/>
        <RootStack.Screen name="PruebaScreen2" component={PruebaScreen2}/>
    </RootStack.Navigator>
);

export default RootStackScreen;