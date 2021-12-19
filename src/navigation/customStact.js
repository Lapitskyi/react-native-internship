import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';

const Stack = createNativeStackNavigator();

const CustomStact = () => {
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen
                name="Favorites"
                component={Favorites}

            />
        </Stack.Navigator>
    );
};

export default CustomStact;
