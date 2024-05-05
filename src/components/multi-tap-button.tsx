import React from 'react';
import {
  type GestureResponderEvent,
  Pressable,
  type PressableProps,
} from 'react-native';
import { useMultiTap } from '../';

interface MultiTapButtonProps extends PressableProps {
  threshold?: number;
  timeoutDuration?: number;
}

const MultiTapButton: React.FC<MultiTapButtonProps> = ({
  threshold = 2,
  timeoutDuration = 1000,
  onPress,
  ...pressableProps
}) => {
  const handleMultiPress = useMultiTap(threshold, timeoutDuration);

  const handlePress = (event: GestureResponderEvent) => {
    if (typeof onPress === 'function') {
      handleMultiPress(() => {
        onPress(event);
      });
    }
  };

  return <Pressable onPress={handlePress} {...pressableProps} />;
};

export default MultiTapButton;
