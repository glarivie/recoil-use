import { useCallback } from 'react';
import { useRecoilState, RecoilState } from 'recoil';

const useRecoilToggle = (state: RecoilState<boolean>): [boolean, (nextValue?: any) => void] => {
  const [value, setValue] = useRecoilState<boolean>(state);

  const toggleValue = useCallback((nextValue?: any): void => {
    return setValue(typeof nextValue === 'boolean' ? nextValue : !value);
  }, [value, setValue]);

  return [value, toggleValue];
};

export default useRecoilToggle;
