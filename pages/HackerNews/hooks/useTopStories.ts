import { useState, useEffect } from 'react';
import { HACKER_NEWS_BASE_URL } from '../constants';
import { TopStory } from '../types/TopStory';

export const useTopStories = (
  maxStoriesCount: number = 100,
): { topStories: TopStory[]; loadingStories: boolean; hasError: boolean } => {
  const [loadingStories, setLoadingStories] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const fetchHN = async () => {
      try {
        setLoadingStories(true);
        setHasError(false);

        const response = await fetch(`${HACKER_NEWS_BASE_URL}/topstories.json`);
        const data = await response.json();
        setTopStories(data.slice(0, maxStoriesCount));
      } catch (error) {
        setHasError(true);
      }

      setLoadingStories(false);
    };

    fetchHN();
  }, [maxStoriesCount]);

  return { topStories, loadingStories, hasError };
};
