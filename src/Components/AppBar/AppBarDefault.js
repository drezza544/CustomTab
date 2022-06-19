import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBarDefault = (props) => (
    <Appbar.Header dark={true} style={props.style}>
        <Appbar.BackAction onPress={() => alert('Back Pages')} color='black' animated={false} />
        <Appbar.Content title="Home" color='black'/>
        <Appbar.Action icon="magnify" color='black'/>
        <Appbar.Action icon="dots-vertical" color='black'/>
    </Appbar.Header>
);

export default AppBarDefault;