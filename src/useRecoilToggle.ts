import { useCallback } from 'react';
import { useRecoilState, RecoilState } from 'recoil';

const useRecoilToggle = (state: RecoilState<boolean>): [boolean, (nextValue?: any) => void] => {
  const [value, setValue] = useRecoilState<boolean>(state);

  const toggleValue = useCallback((nextValue?: any): void => {
    return setValue(prev => typeof nextValue === 'boolean' ? nextValue : !prev);
  }, [setValue]);

  return [value, toggleValue];
};

export default useRecoilToggle;
