import * as React from 'react';

import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useMultiTap, MultiTapButton } from 'react-native-multitap';

export default function App() {
  const multiTap = useMultiTap(3);

  const handlePress = () => {
    console.log('Multi-tap detected!');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => multiTap(handlePress)}>
        <Text>Press me</Text>
      </Pressable>
      <MultiTapButton threshold={3} onPress={handlePress}>
        <Text>Press me</Text>
      </MultiTapButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
