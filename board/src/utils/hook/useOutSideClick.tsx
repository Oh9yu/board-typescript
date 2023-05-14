import { useEffect } from 'react';

const useOutSideClick = (ref: any, handler: any) => {
  useEffect(() => {
    const close = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', close);

    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, [ref, handler]);
};

export default useOutSideClick;
