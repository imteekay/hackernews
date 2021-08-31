import { useTopStories } from './HackerNews/hooks/useTopStories';
import { useTopStoriesInfo } from './HackerNews/hooks/useTopStoriesInfo';
import { TopStoryInfo } from './HackerNews/types/TopStoryInfo';
import { LoadMoreButton } from './HackerNews/LoadMoreButton';

export default function Home() {
  const { topStories, loadingStories } = useTopStories();
  const { topStoriesInfo, isLoading, fetchNextPage } =
    useTopStoriesInfo(topStories);

  if (loadingStories) return <p>Loading...</p>;

  return (
    <ul>
      {topStoriesInfo.map((story: TopStoryInfo) => (
        <li key={story.key}>
          <p>{story.title}</p>
          <p>{story.author}</p>
          <a href={story.url} target="_blank" rel="noreferrer">
            {'>'}
          </a>
        </li>
      ))}
      <LoadMoreButton isLoading={isLoading} fetchNextPage={fetchNextPage} />
    </ul>
  );
}
