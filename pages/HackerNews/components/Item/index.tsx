import { FunctionComponent } from 'react';

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #eaeaea',
  padding: '24px 14px',
  overflowX: 'overlay' as 'overlay',
};

export const Item: FunctionComponent = ({ children }) => (
  <ol style={itemStyle}>{children}</ol>
);
