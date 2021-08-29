import { useState, useEffect } from 'react';
import { HACKER_NEWS_BASE_URL } from '../constants';
import { TopStory } from '../types/TopStory';

export const useTopStories = (
  maxStoriesCount: number = 100,
): { topStories: TopStory[] } => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const fetchHN = async () => {
      const response = await fetch(`${HACKER_NEWS_BASE_URL}/topstories.json`);
      const data = await response.json();
      setTopStories(data.slice(0, maxStoriesCount));
    };

    fetchHN();
  }, [maxStoriesCount]);

  return { topStories };
};
