import { LoadMoreButtonPropTypes } from './types/LoadMoreButtonPropTypes';

export const LoadMoreButton = ({
  isLoading,
  fetchNextPage,
}: LoadMoreButtonPropTypes) =>
  isLoading ? (
    <p>Loading...</p>
  ) : (
    <button onClick={fetchNextPage}>Load more</button>
  );
