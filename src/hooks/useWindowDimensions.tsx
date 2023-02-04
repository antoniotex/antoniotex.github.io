import { useEffect, useState } from 'react';

type WindowDimentionsProps = {
  width: number;
  height: number;
};

const useWindowDimensions = (): WindowDimentionsProps => {
  const [windowDimensions, setWindowDimensions] =
    useState<WindowDimentionsProps>({
      width: 0,
      height: 0,
    });
  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
