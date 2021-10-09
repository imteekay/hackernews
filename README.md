# Hackernews

Running the dev server:

```bash
yarn dev
```

## Tech Stack

- NextJS
- JavaScript
- TypeScript
- Hooks
- Prettier
- ESLint

## Architecture

The Hackernews page is located in the `index.tsx` file. And all of the components are in the `HackerNews` folder.

The main components (`Story`, `StoriesList`, and `LoadMoreButton`) are located in the `HackerNews` folder's root. All the smaller components are in the `components` folder. The `hooks` and TypeScript `types` are separated on its own folders.

To handle the data fetching, I created a first hook (`useTopStories`) to request the `topstories` that returns the top 100 stories from hackernews API. With this array of "ids", I request 6 by 6 the `item` endpoint with another hook (`useTopStoriesInfo`). The hook uses a `page` state to request 6 by 6 and provides a `fetchNextPage` function to add in the button `onClick` listener.

At first, I decided to use no css-in-js framework, so all of the styles are in the `style` prop for each component.

## Implementation History

- [Setup](https://github.com/leandrotk/hackernews/pull/1)
- [Fetch & List top stories](https://github.com/leandrotk/hackernews/pull/2)
- [Infinite Scroll to load more buttons on demand](https://github.com/leandrotk/hackernews/pull/3)
- [Refactoring: extracting components](https://github.com/leandrotk/hackernews/pull/4)
- [Style the list](https://github.com/leandrotk/hackernews/pull/5)
- [Loading Spinner](https://github.com/leandrotk/hackernews/pull/6)
