import React from 'react';
import {
    View, Text
} from 'react-native';

class Notification extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'green'
                }}
            >
                <Text>Screen Notification</Text>
            </View>
        )
    }
}

export default Notification;