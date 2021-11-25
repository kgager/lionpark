import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text,TouchableHighlight ,Image, View, SafeAreaView, Button,ScrollView, } from 'react-native';
import Header from './components/Header';
import {
  Menu,
  HamburgerIcon,
  Box,
  Pressable,
  Left,
  NativeBaseProvider,
} from "native-base";
import { Block, Card, Icon, Input, NavBar } from 'galio-framework';
import SpeechBubble from 'react-native-speech-bubble';
import Voice from 'react-native-voice';

const App = () => {
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged; 
    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  const onSpeechEnd = (e) => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  };

  const onSpeechError = (e) => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = (e) => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };

  const onSpeechPartialResults = (e) => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = (e) => {
    //Invoked when pitch that is recognized changed
    console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value);
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start('en-US'); 
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <NavBar title="Screen Title" 
              
      />
      <NativeBaseProvider>
      <Box h="40%" w="90%" alignItems="flex-end">
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
      
    
      <SpeechBubble
        speeches={[ 'Hello.', 'I am here to help you park!!!', 'Where do you want to park?' ]}
        allowSkip ="true"
        allowSpeechReplay= "true"
        writingDelay = {10}
      />
      <TouchableHighlight onPress={startRecognizing}>
          <Image
            style={styles.imageButton}
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
            }}
          />
        </TouchableHighlight>
      <Image source={require('./assets/1.png')} />
     
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0076A5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageButton: {
    width: 50,
    height: 50,
  },

});