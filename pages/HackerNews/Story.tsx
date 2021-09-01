import { StoryPropTypes } from './types/Story';

import { FunctionComponent } from 'react';

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #eaeaea',
  padding: '24px 14px',
};

export const Item: FunctionComponent = ({ children }) => (
  <ol style={itemStyle}>{children}</ol>
);

const titleStyle = {
  fontSize: '16px',
  fontWeight: 'normal' as 'normal',
  marginTop: '4px',
  marginRight: '8px',
};

export const Title: FunctionComponent = ({ children }) => (
  <h2 style={titleStyle}>{children}</h2>
);

const infoStyle = {
  margin: 0,
  fontSize: '12px',
  color: '#544c4c',
};

export const Info: FunctionComponent = ({ children }) => (
  <p style={infoStyle}>{children}</p>
);

const titleWrapperStyle = {
  display: 'flex',
};

export const TitleWrapper: FunctionComponent = ({ children }) => (
  <div style={titleWrapperStyle}>{children}</div>
);

const urlStyle = {
  fontSize: '12px',
  marginTop: '8px',
};

export const Url: FunctionComponent = ({ children }) => (
  <p style={urlStyle}>{children}</p>
);

const infoWrapperStyle = {
  display: 'flex',
};

export const InfoWrapper: FunctionComponent = ({ children }) => (
  <div style={infoWrapperStyle}>{children}</div>
);

const dividerStyle = {
  marginLeft: '4px',
  marginRight: '4px',
  fontSize: '12px',
  color: '#544c4c',
};

export const Divider: FunctionComponent = () => (
  <span style={dividerStyle}>{'|'}</span>
);

const rightArrowStyle = {
  marginLeft: 'auto',
  color: '#6d6d6d',
  fontSize: '20px',
  fontWeight: 'lighter' as 'lighter',
};

export const RightArrow: FunctionComponent = () => (
  <span style={rightArrowStyle}>{'>'}</span>
);

const containerStyle = {
  marginLeft: '24px',
};

const formatMessage = (count: number) => (count > 1 ? 'comments' : 'comment');

const indexStyle = {
  fontSize: '20px',
  fontWeight: 'bold' as 'bold',
  color: '#6d6d6d',
};

export const Index: FunctionComponent = ({ children }) => (
  <span style={indexStyle}>{children}</span>
);

export const Story = ({
  story,
  index,
}: {
  story: StoryPropTypes;
  index: number;
}) => (
  <a href={story.url} target="_blank" rel="noreferrer">
    <Item>
      <Index>{index}</Index>
      <div style={containerStyle}>
        <TitleWrapper>
          <Title>{story.title}</Title>
          <Url>({story.url})</Url>
        </TitleWrapper>
        <InfoWrapper>
          <Info>
            {story.points} points by {story.author}
          </Info>
          <Divider />
          <Info>
            {story.commentsCount} {formatMessage(story.commentsCount)}
          </Info>
        </InfoWrapper>
      </div>
      <RightArrow />
    </Item>
  </a>
);
