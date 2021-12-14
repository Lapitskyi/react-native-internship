import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import {Search} from './src/screens/Search';
import List from './src/components/List/List';


const Stack = createNativeStackNavigator();
const App = () => {
    useEffect(() => {
        const init = async () => {
            // …do multiple sync or async tasks
        };

        init().finally(async () => {
            await RNBootSplash.hide({fade: true});
        });
    }, []);
    return (
        <NavigationContainer>
            <View style={styles.content}>
                <Stack.Navigator initialRouteName={'Home'}>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{header: () => <Header/>}}
                    />
                    <Stack.Screen name="Search" component={Search}/>
                    <Stack.Screen name="List" component={List}/>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Profile" component={Profile}/>

                </Stack.Navigator>
            </View>

            <Footer/>
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
    },
    content: {
        color: 'white',
        flex: 10,
    },
});
