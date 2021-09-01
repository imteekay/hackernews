import { StoriesListPropTypes } from './types/StoriesListPropTypes';
import { TopStoryInfo } from './types/TopStoryInfo';
import { Story } from './Story';

const storiesListStyle = {
  borderTop: '1px solid #eaeaea',
  borderLeft: '1px solid #eaeaea',
  borderRight: '1px solid #eaeaea',
  borderRadius: '6px',
  padding: 0,
  margin: '24px',
  boxShadow: '2px 2px 9px #eaeaea',
};

export const StoriesList = ({ topStoriesInfo }: StoriesListPropTypes) => {
  return (
    <ul style={storiesListStyle}>
      {topStoriesInfo.map((story: TopStoryInfo, index: number) => (
        <Story story={story} index={index} key={story.key} />
      ))}
    </ul>
  );
};
