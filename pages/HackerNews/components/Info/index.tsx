import { FunctionComponent } from 'react';

const infoStyle = {
  margin: 0,
  fontSize: '12px',
  color: '#544c4c',
};

export const Info: FunctionComponent = ({ children }) => (
  <p style={infoStyle}>{children}</p>
);
