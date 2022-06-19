import React from 'react';
import {
    View, Text
} from 'react-native';

class Transaction extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'purple'
                }}
            >
                <Text>Screen Transaction</Text>
            </View>
        )
    }
}

export default Transaction;