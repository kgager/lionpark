import React from 'react';
import {View, Image} from 'react-native';
import {
  Menu,
  HamburgerIcon,
  Box,
  Pressable,
  Left,
  NativeBaseProvider,
} from "native-base";
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
      <Header/>
      <Box h="80%" w="90%" alignItems="flex-start">
      <Menu
        w="190"
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>
          )
        }}
      >
        <Menu.Item>Schedule</Menu.Item>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        
      </Menu>
    </Box>
    </NativeBaseProvider>
    </View>
  );
};

export default Header;