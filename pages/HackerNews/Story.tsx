import { StoryPropTypes } from './types/Story';
import { Item } from './components/Item';
import { Title } from './components/Title';
import { Info } from './components/Info';
import { TitleWrapper } from './components/TitleWrapper';
import { Url } from './components/Url';
import { InfoWrapper } from './components/InfoWrapper';
import { Divider } from './components/Divider';
import { RightArrow } from './components/RightArrow';
import { Index } from './components/Index';

const containerStyle = {
  marginLeft: '24px',
};

const formatMessage = (count: number) => (count > 1 ? 'comments' : 'comment');

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
