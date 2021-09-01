import { FunctionComponent } from 'react';

const infoWrapperStyle = {
  display: 'flex',
};

export const InfoWrapper: FunctionComponent = ({ children }) => (
  <div style={infoWrapperStyle}>{children}</div>
);
