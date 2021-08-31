export type LoadMoreButtonPropTypes = {
  isLoading: boolean;
  fetchNextPage: () => void;
  canLoadMore: boolean;
};
