import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function EntryItem({ item, deleteHandler }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => deleteHandler(item.key)}>
                <Text numberOfLines={1} style={styles.item}>{item.key}</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 60
    },

    item: {
        padding: 16,
        borderColor: 'lightblue',
        borderWidth: 1,
        borderRadius: 10
    }
})