import React, {useEffect} from 'react';
import {
    Platform,
    PlatformColor,
    StyleSheet, useColorScheme,
    View,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import CustomDrawer from './src/navigation/CustomDrawer';
const MyTheme = {
    dark: false,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};
const App = () => {
    const scheme = useColorScheme();
    useEffect(() => {
        const init = async () => {
            // …do multiple sync or async tasks
        };

        init().finally(async () => {
            await RNBootSplash.hide({fade: true});
        });
    }, []);
    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <View style={styles.container}>
                <CustomDrawer/>
            </View>

        </NavigationContainer>

    );
};
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        color: 'white',
        ...Platform.select({
            ios: {
                color: PlatformColor('container'),
                backgroundColor:
                    PlatformColor('systemTealColor'),
            },
            android: {
                color: PlatformColor('?android:attr/textColor'),
                backgroundColor:
                    PlatformColor('@android:color/holo_blue_bright'),
            },
            default: { color: 'black' }
        })
    },

    content: {
        color: 'white',
        flex: 10,
    },
});
