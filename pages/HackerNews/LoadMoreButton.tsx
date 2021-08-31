import { LoadMoreButtonPropTypes } from './types/LoadMoreButtonPropTypes';

export const LoadMoreButton = ({
  isLoading,
  fetchNextPage,
  canLoadMore,
}: LoadMoreButtonPropTypes) => {
  if (isLoading) return <p>Loading...</p>;
  return canLoadMore ? (
    <button onClick={fetchNextPage}>Load more</button>
  ) : null;
};
