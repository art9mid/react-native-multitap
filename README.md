# useMultiTap

`MultiTapButton` is a custom React component that integrates the `useMultiTap` hook to enable tracking multiple taps on a button. It is particularly useful when you need a button that triggers an action only after multiple taps.

## Installation

You can install `react-native-use-multitap` via npm or yarn:

```bash
npm install react-native-use-multitap
```
or
```bash
yarn add react-native-use-multitap
```

## Usage

```jsx
import React from 'react';
import { useMultiTap, MultiTapButton } from 'react-native-use-multitap';
import { Pressable, Text } from 'react-native';

function MyComponent() {
  const multiTap = useMultiTap(3);

  const handlePress = () => {
    console.log('Multi-tap detected!')
  }

  return (
    <>
      <Pressable onPress={() => multiTap(handlePress)}>
        <Text>
          Press me
        </Text>
      </Pressable>
      <MultiTapButton threshold={3} onPress={handlePress}>
        <Text>
          Press me
        </Text>
      </MultiTapButton>
    </>
  );
}

export default MyComponent;
```

## API
useMultiTap(threshold, timeoutDuration)
- threshold: Optional parameter specifying the number of taps required to perform an action (default is 2).
- timeoutDuration: Optional parameter specifying the timeout duration in milliseconds to reset the tap counter (default is 1000 ms).
