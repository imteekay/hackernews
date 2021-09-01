import { FunctionComponent } from 'react';

const titleWrapperStyle = {
  display: 'flex',
};

export const TitleWrapper: FunctionComponent = ({ children }) => (
  <div style={titleWrapperStyle}>{children}</div>
);
