import React from 'react';
import {
    View, Text
} from 'react-native';

class Account extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'cyan'
                }}
            >
                <Text>Screen Account</Text>
            </View>
        )
    }
}

export default Account;