import { useCallback } from 'react';
import { useRecoilState, RecoilState } from 'recoil';

interface Actions {
  inc: (delta?: number) => void;
  dec: (delta?: number) => void;
  set: (value: number) => void;
}

const useCounterRecoilState = (state: RecoilState<number>): [number, Actions] => {
  const [value, setValue] = useRecoilState<number>(state);

  if (typeof value !== 'number') {
    console.error(`state has to be a number, got ${typeof value}`);
  }

  const inc = useCallback((delta: number = 1) => {
    if (typeof delta !== 'number') {
      console.error(`delta has to be a number or function returning a number, got ${typeof delta}`);
    }

    setValue((prev: number) => prev + delta);
  }, [setValue]);

  const dec = useCallback((delta: number = 1) => {
    if (typeof delta !== 'number') {
      console.error(`delta has to be a number or function returning a number, got ${typeof delta}`);
    }

    setValue((prev: number) => prev - delta);
  }, [setValue]);

  return [value, { inc, dec, set: setValue }];
};

export default useCounterRecoilState;
