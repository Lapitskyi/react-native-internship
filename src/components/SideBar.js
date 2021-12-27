import React from 'react';
import {Text, View} from 'react-native';

import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {Circle, Svg} from 'react-native-svg';

const SideBar = ({...props}) => {
    return (
        <>
            <DrawerContentScrollView {...props}>
                <View>
                    <Svg height="50" width="50">
                        <Circle cx="25" cy="25" r="25" fill="grey" />
                    </Svg>

                </View>
                <View>
                    <Text>John Doe</Text>
                    <Text>@JohnDoe</Text>
                </View>

                <DrawerItemList {...props}/>


            </DrawerContentScrollView>
            <DrawerItem
                // icon={(color, size)=>(<Icon name="exit" color={color} size={size}/>)}
                label="Sign Out"
                onPress={() => {
                }}
            />

        </>


    );
};
export default SideBar;
