import { useTopStories } from './HackerNews/hooks/useTopStories';
import { useTopStoriesInfo } from './HackerNews/hooks/useTopStoriesInfo';

export default function Home() {
  const { topStories } = useTopStories();
  const { topStoriesInfo, isLoading } = useTopStoriesInfo(topStories);

  if (isLoading) return <p>Loading...</p>;

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
