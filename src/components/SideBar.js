import React from 'react';
import { Text, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';

const SideBar = ({...props}) => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>First Name Last Name</Text>
            </View>

            <DrawerItemList {...props}/>

            <DrawerItem
                label="Favorites"
            />

        </DrawerContentScrollView>


    );
};
export default SideBar;
