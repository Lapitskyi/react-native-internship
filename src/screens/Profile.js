import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';

const Profile = () => {
    return (
        <SafeAreaProvider style={styles.container}>
            <View>
                <Text>Profile</Text>
            </View>
        </SafeAreaProvider>

    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        width: 100,
    },
});
