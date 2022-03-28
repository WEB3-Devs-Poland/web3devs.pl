import { useEffect } from 'react';

const useWindowChangeEvent = (callback = () => {}, callImmediately = false) => {
  useEffect(() => {
    window.addEventListener('resize', callback);

    callImmediately && callback();

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, [callback, callImmediately]);
};

export default useWindowChangeEvent;
