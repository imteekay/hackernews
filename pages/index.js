import { useState, useEffect } from 'react';

const HACKER_NEWS_BASE_URL = 'https://hacker-news.firebaseio.com/v0';

const useTopStories = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const fetchHN = async () => {
      const response = await fetch(`${HACKER_NEWS_BASE_URL}/topstories.json`);
      const data = await response.json();
      setTopStories(data.slice(0, 100));
    };

    fetchHN();
  }, []);

  return { topStories };
};

const useTopStoriesInfo = (topStories) => {
  const [topStoriesInfo, setTopStoriesInfo] = useState([]);

  useEffect(() => {
    const fetchTopStories = async () => {
      const responses = await Promise.all(
        topStories.map((topStory) =>
          fetch(`${HACKER_NEWS_BASE_URL}/item/${topStory}.json`),
        ),
      );

      for (const response of responses) {
        const data = await response.json();
        setTopStoriesInfo((topStoriesInfo) => [
          ...topStoriesInfo,
          {
            key: `${data.id}-${data.title}`,
            title: data.title,
            author: data.by,
            url: data.url,
          },
        ]);
      }
    };

    fetchTopStories();
  }, [topStories]);

  return { topStoriesInfo };
};

export default function Home() {
  const { topStories } = useTopStories();
  const { topStoriesInfo } = useTopStoriesInfo(topStories);

  return (
    <ul>
      {topStoriesInfo.map((story) => (
        <li key={story.key}>
          <p>{story.title}</p>
          <p>{story.author}</p>
          <a href={story.url} target="_blank" rel="noreferrer">
            {'>'}
          </a>
        </li>
      ))}
    </ul>
  );
}
