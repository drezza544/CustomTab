// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Card, Colors, Provider } from 'react-native-paper';


import Home from './src/Screens/Tabs/Home';
import Transaction from './src/Screens/Tabs/Transaction';
import Notification from './src/Screens/Tabs/Notification';
import Account from './src/Screens/Tabs/Account';

import CustomTab from './src/Screens/Tabs/CustomTab';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundStyle: isDarkMode ? Colors.black : Colors.white
  };

  return (
    <Provider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
          backgroundColor={Colors.white}/>
        <NavigationContainer>
          <RootStack/>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  )
}

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  carStyleInterpolar: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
}

const Stack = createSharedElementStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen 
        name="CustomTab" component={CustomTab}
      />
      <Stack.Screen 
        name="Home" component={Home}
      />
      <Stack.Screen 
        name="Transaction" component={Transaction}
      />
      <Stack.Screen 
        name="Notification" component={Notification}
      />
      <Stack.Screen 
        name="Account" component={Account}
      />
    </Stack.Navigator>
  )
}

export default App;