import { FunctionComponent } from 'react';

const dividerStyle = {
  marginLeft: '4px',
  marginRight: '4px',
  fontSize: '12px',
  color: '#544c4c',
};

export const Divider: FunctionComponent = () => (
  <span style={dividerStyle}>{'|'}</span>
);
