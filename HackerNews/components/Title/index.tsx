import { FunctionComponent } from 'react';

const titleStyle = {
  fontSize: '16px',
  fontWeight: 'normal' as 'normal',
  marginTop: '4px',
  marginRight: '8px',
};

export const Title: FunctionComponent = ({ children }) => (
  <h2 style={titleStyle}>{children}</h2>
);
