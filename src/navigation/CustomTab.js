import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Category from '../screens/Category';
import Login from '../screens/Login';
import {Search} from '../screens/Search';
import {View, StyleSheet, Image} from 'react-native';
import home from '../assets/images/home.png';
import search from '../assets/images/search.png';
import list from '../assets/images/list.png';
import user from '../assets/images/user.png';

const Tab = createBottomTabNavigator();

const CustomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 60,
                    ...styles.shadow,
                },
            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image
                                source={home}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height:25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Category"
                component={Category}
                 options={{
                    title: "Films",
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image
                                source={list}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height:25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                 options={{

                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image
                                source={search}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height:25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                 options={{

                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image
                                source={user}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height:25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    },
});

export default CustomTab;
