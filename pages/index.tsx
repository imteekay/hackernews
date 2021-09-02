import { useTopStories } from 'HackerNews/hooks/useTopStories';
import { useTopStoriesInfo } from 'HackerNews/hooks/useTopStoriesInfo';
import { StoriesList } from 'HackerNews/StoriesList';
import { LoadMoreButton } from 'HackerNews/LoadMoreButton';

const containerStyle = {
  margin: '24px',
};

export default function Home() {
  const { topStories } = useTopStories();
  const { topStoriesInfo, isLoading, fetchNextPage, canLoadMore } =
    useTopStoriesInfo(topStories);

  return (
    <div style={containerStyle}>
      <h1>Hackernews</h1>
      <StoriesList topStoriesInfo={topStoriesInfo} />
      <LoadMoreButton
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        canLoadMore={canLoadMore}
      />
    </div>
  );
}
