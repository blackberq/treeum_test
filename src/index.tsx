import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Artist from './screens/Artist';
import Album from './screens/Album';

import { HOME, ALBUM, ARTIST } from './navigation';

const Screens: FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={ALBUM} component={Album} />
        <Stack.Screen name={ARTIST} component={Artist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
