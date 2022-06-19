import React, { useEffect, useRef } from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import Icon, { Icons } from '../../Assets/Icons/Icons';
import Colors from '../../Assets/Colors/Colors';

import Home from './Home';
import Transaction from './Transaction';
import Notification from './Notification';
import Account from './Account';

const TabArr = [
    { route: 'Home', label: 'Home', type: Icons.Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: Home },
    { route: 'Transaction', label: 'Transaction', type: Icons.MaterialCommunityIcons, activeIcon: 'heart-plus', inActiveIcon: 'heart-plus-outline', component: Transaction },
    { route: 'Notification', label: 'Notification', type: Icons.MaterialCommunityIcons, activeIcon: 'timeline-plus', inActiveIcon: 'timeline-plus-outline', component: Notification },
    { route: 'Account', label: 'Account', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: Account }
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    
    useEffect(() => {
        if (focused) {
            viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
        } else {
            viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
        }
    }, [focused])
    
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}
        >
            <Animatable.View
                ref={viewRef}
                duration={1000}
                style={styles.container}
            >
                <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Colors.primary : Colors.primaryLite} />
            </Animatable.View>
        </TouchableOpacity>
    )
}

const options = {
    headerShown: false,
    tabBarStyle: {
        height: 60,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 16
    }
}

export default function CustomTab() {
    return (
        <Tab.Navigator
            screenOptions={options}
        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen 
                        key={index}
                        name={item.route}
                        component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})