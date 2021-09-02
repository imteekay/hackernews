import { FunctionComponent } from 'react';

const urlStyle = {
  fontSize: '12px',
  marginTop: '8px',
};

export const Url: FunctionComponent = ({ children }) => (
  <p style={urlStyle}>{children}</p>
);
