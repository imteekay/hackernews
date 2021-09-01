import { FunctionComponent } from 'react';

const indexStyle = {
  fontSize: '20px',
  fontWeight: 'bold' as 'bold',
  color: '#6d6d6d',
};

export const Index: FunctionComponent = ({ children }) => (
  <span style={indexStyle}>{children}</span>
);
