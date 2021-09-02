import { FunctionComponent } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const getTitleWrapperStyle = (isMdUp: boolean) =>
  isMdUp
    ? {
        display: 'flex',
      }
    : {};

export const TitleWrapper: FunctionComponent = ({ children }) => {
  const isMdUp = useMediaQuery('(min-width: 800px)');
  return <div style={getTitleWrapperStyle(isMdUp)}>{children}</div>;
};
