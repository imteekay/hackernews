import { StoriesListPropTypes } from './types/StoriesListPropTypes';
import { TopStoryInfo } from './types/TopStoryInfo';
import { Story } from './Story';

export const StoriesList = ({ topStoriesInfo }: StoriesListPropTypes) => {
  return (
    <ul>
      {topStoriesInfo.map((story: TopStoryInfo) => (
        <Story story={story} key={story.key} />
      ))}
    </ul>
  );
};
