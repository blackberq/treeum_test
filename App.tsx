import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './gesture-handler';

import store from './src/redux/store';

import Screens from './src';

const App: FC = () => (
  <GestureHandlerRootView style={styles.container}>
    <Provider store={store}>
      <SafeAreaProvider>
        <Screens />
      </SafeAreaProvider>
    </Provider>
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
