import { useEffect } from 'react';

type CloseFunction = () => void;

export const useModalEffects = (closeFunction: CloseFunction) => {
  useEffect(() => {
    const handler = ({ key }: KeyboardEvent) => {
      if (key !== 'Escape') return;
      closeFunction();
    };

    window.addEventListener('keydown', handler);

    return () => window.removeEventListener('keydown', handler);
  }, [closeFunction]);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
};
