import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { MultiTapButton } from '../';

describe('MultiTapButton', () => {
  test('does not call onPress if tapped only once', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <MultiTapButton
        testID={'test-button'}
        onPress={onPressMock}
        threshold={2}
      />
    );

    const button = getByTestId('test-button');
    fireEvent.press(button);

    expect(onPressMock).not.toHaveBeenCalled();
  });
});
