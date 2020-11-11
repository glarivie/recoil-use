import { useCallback } from 'react';
import { useRecoilState, RecoilState } from 'recoil';

const useRecoilSetState = <T extends object>(
  state: RecoilState<T>,
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
  const [value, setValue] = useRecoilState<T>(state);

  const setState = useCallback((patch: Partial<T> | ((prevState: T) => Partial<T>)): void => {
    return setValue(prev => Object.assign({}, prev, patch instanceof Function ? patch(prev) : patch));
  }, [setValue]);

  return [value, setState];
};

export default useRecoilSetState;
