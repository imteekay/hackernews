import { StoryPropTypes } from './types/Story';

export const Story = ({ story }: { story: StoryPropTypes }) => {
  return (
    <li>
      <p>{story.title}</p>
      <p>{story.author}</p>
      <a href={story.url} target="_blank" rel="noreferrer">
        {'>'}
      </a>
    </li>
  );
};
