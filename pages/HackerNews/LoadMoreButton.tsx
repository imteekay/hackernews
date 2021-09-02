import { LoadMoreButtonPropTypes } from './types/LoadMoreButtonPropTypes';
import { LoadingSpinner } from './components/LoadingSpinner';

const wrapperStyle = {
  textAlign: 'center' as 'center',
};

const loadMoreLinkStyle = {
  cursor: 'pointer',
  color: '#ff4f4fd1',
  background: 'linear-gradient(to top, #ff000061 0%, transparent 50%)',
  fontWeight: 500,
};

export const LoadMoreButton = ({
  isLoading,
  fetchNextPage,
  canLoadMore,
}: LoadMoreButtonPropTypes) => {
  if (isLoading) return <LoadingSpinner />;

  return canLoadMore ? (
    <div style={wrapperStyle}>
      <a onClick={fetchNextPage} style={loadMoreLinkStyle}>
        Load more
      </a>
    </div>
  ) : null;
};
