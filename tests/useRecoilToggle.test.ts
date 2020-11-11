import { atom } from 'recoil';
import { act, renderRecoilHook } from 'react-recoil-hooks-testing-library';
import { useRecoilToggle } from '../src';

const booleanState = atom<boolean>({
  key: 'booleanState',
  default: false,
});

test('should init state to false', () => {
  const { result } = renderRecoilHook(() => useRecoilToggle(booleanState));

  expect(result.current[0]).toBe(false);
  expect(typeof result.current[1]).toBe('function');
});

test('should toggle state', () => {
  const { result } = renderRecoilHook(() => useRecoilToggle(booleanState));
  const [, toggle] = result.current;

  expect(result.current[0]).toBe(false);

  act(() => toggle(true));
  expect(result.current[0]).toBe(true);

  act(() => toggle(false));
  expect(result.current[0]).toBe(false);

  act(() => toggle());
  expect(result.current[0]).toBe(true);

  act(() => toggle());
  expect(result.current[0]).toBe(false);
});

test('should ignore non-boolean parameters and toggle state', () => {
  const { result } = renderRecoilHook(() => useRecoilToggle(booleanState));
  const [, toggle] = result.current;

  expect(result.current[0]).toBe(false);

  act(() => toggle('string'));
  expect(result.current[0]).toBe(true);

  act(() => toggle({}));
  expect(result.current[0]).toBe(false);
});
