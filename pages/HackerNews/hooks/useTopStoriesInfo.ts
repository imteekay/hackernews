import { useState, useEffect } from 'react';
import { HACKER_NEWS_BASE_URL } from '../constants';
import { TopStory } from '../types/TopStory';
import { TopStoryInfo } from '../types/TopStoryInfo';

export const useTopStoriesInfo = (
  topStories: TopStory[],
): {
  topStoriesInfo: TopStoryInfo[];
  isLoading: boolean;
  hasError: boolean;
  fetchNextPage: () => void;
  canLoadMore: boolean;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(0);
  const [topStoriesInfo, setTopStoriesInfo] = useState<TopStoryInfo[]>([]);

  const initialPageIndex = page * 10;
  const endPageIndex = (page + 1) * 10;
  const canLoadMore = endPageIndex < topStories.length;

  useEffect(() => {
    const stories = topStories.slice(initialPageIndex, endPageIndex);

    const fetchTopStories = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        const responses = await Promise.all(
          stories.map((topStory) =>
            fetch(`${HACKER_NEWS_BASE_URL}/item/${topStory}.json`),
          ),
        );

        for (const response of responses) {
          const data = await response.json();
          setTopStoriesInfo((topStoriesInfo: TopStoryInfo[]) => [
            ...topStoriesInfo,
            {
              key: `${data.id}-${data.title}`,
              title: data.title,
              author: data.by,
              url: data.url,
              commentsCount: data.kids?.length ?? 0,
              points: data.score,
            },
          ]);
        }
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchTopStories();
  }, [topStories, initialPageIndex, endPageIndex]);

  const fetchNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return { topStoriesInfo, isLoading, hasError, fetchNextPage, canLoadMore };
};
