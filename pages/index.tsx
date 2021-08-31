import { useTopStories } from './HackerNews/hooks/useTopStories';
import { useTopStoriesInfo } from './HackerNews/hooks/useTopStoriesInfo';
import { StoriesList } from './HackerNews/StoriesList';
import { LoadMoreButton } from './HackerNews/LoadMoreButton';

export default function Home() {
  const { topStories, loadingStories } = useTopStories();
  const { topStoriesInfo, isLoading, fetchNextPage, canLoadMore } =
    useTopStoriesInfo(topStories);

  if (loadingStories) return <p>Loading...</p>;

  return (
    <>
      <StoriesList topStoriesInfo={topStoriesInfo} />
      <LoadMoreButton
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        canLoadMore={canLoadMore}
      />
    </>
  );
}
