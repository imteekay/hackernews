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
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [topStoriesInfo, setTopStoriesInfo] = useState<TopStoryInfo[]>([]);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        setIsLoading(true);

        const responses = await Promise.all(
          topStories.map((topStory) =>
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
            },
          ]);
        }
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchTopStories();
  }, [topStories]);

  return { topStoriesInfo, isLoading, hasError };
};
