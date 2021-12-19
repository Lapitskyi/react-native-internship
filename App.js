import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './src/navigation/CustomDrawer';

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
            <CustomDrawer/>
        </NavigationContainer>

    );
};
export default App;
