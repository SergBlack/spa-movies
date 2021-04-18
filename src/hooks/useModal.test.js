import { act, renderHook } from '@testing-library/react-hooks';
import useModal from './useModal';

test('Modal window should be open when button is clicked', () => {
  const { result } = renderHook(useModal);
  expect(result.current.isOpen).toBeFalsy();

  act(() => { result.current.toggle(); });
  expect(result.current.isOpen).toBeTruthy();

  act(() => { result.current.toggle(); });
  expect(result.current.isOpen).toBeFalsy();
});
