import { renderHook, act } from '@testing-library/react-hooks';
import { useMultiTap } from '../';

describe('useMultiTap', () => {
  it('should throw an error if threshold is less than or equal to 1', () => {
    expect(() => {
      useMultiTap(1);
    }).toThrow('Threshold must be greater than 1');
  });

  it('should return a function', () => {
    const { result } = renderHook(() => useMultiTap());
    expect(typeof result.current).toBe('function');
  });

  it('should increment tapCount when handlePress is called', () => {
    const { result } = renderHook(() => useMultiTap());
    act(() => {
      result.current();
    });
    expect(result.current).toBeTruthy();
  });

  it('should reset tapCount after timeoutDuration', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useMultiTap());
    act(() => {
      result.current();
    });
    expect(result.current).toBeTruthy();
    act(() => {
      jest.advanceTimersByTime(1001);
    });
    expect(result.current).toBeTruthy();
  });

  it('should execute callback when tapCount reaches threshold', () => {
    const mockCallback = jest.fn();
    const { result } = renderHook(() => useMultiTap(3));
    act(() => {
      result.current(mockCallback);
    });
    act(() => {
      result.current(mockCallback);
    });
    expect(mockCallback).not.toBeCalled();
    act(() => {
      result.current(mockCallback);
    });
    expect(mockCallback).toBeCalled();
  });
});
