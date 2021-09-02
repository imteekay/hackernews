import { FunctionComponent } from 'react';

const rightArrowStyle = {
  marginLeft: 'auto',
  color: '#6d6d6d',
  fontSize: '20px',
  fontWeight: 'lighter' as 'lighter',
};

export const RightArrow: FunctionComponent = () => (
  <span style={rightArrowStyle}>{'>'}</span>
);
