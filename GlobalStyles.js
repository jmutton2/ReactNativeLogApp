import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        backgroundColor: 'lightblue',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});