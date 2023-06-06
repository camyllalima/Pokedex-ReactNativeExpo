import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes';

import theme from './src/global/styles/theme';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="transparent" translucent />
        <Routes />
    </ThemeProvider>
  );
}