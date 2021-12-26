import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomTab from './CustomTab';
import Header from '../components/Header';

const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
    return (
        <View style={styles.content}>
            <Drawer.Navigator
                screenOptions={{header: () => <Header/>}
                }
            >
                <Drawer.Screen name="Home" component={CustomTab}/>

            </Drawer.Navigator>
        </View>

    );
};
export default CustomDrawer;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        color: 'white',
    },
    content: {
        color: 'white',
        flex: 10,
    },
});

