This project is a blow-by-blow follow-through of the Hacker News Clone tutorial by @gitconnected.

[React & Redux Tutorial - Build a Hacker News Clone](https://gitconnected.com/courses/learn-react-redux-tutorial-build-a-hacker-news-clone) is the tutorial page.

This repo is also a small view into how fast the React ecosystem changes. The video for this project was initially published on the 8th of October 2018. I have had to make some changes to the code for everything to work. As you watch the video, I would encourage you to follow along on the writeup version of the tutorial. It is much easier to keep updated.

This repo has no tests. It is purely for learning purposes. The [gitconnected/hacker-news-reader](https://github.com/gitconnected/hacker-news-reader) repo is more thorough and up to date on how one would build a Hacker News Reader with all the bells and whistles. This repo tries to follow the tutorial strictlyso that the learnings are clear.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Some of the changes made

#### `createGlobalStyle`

At the very beginning, to implement the web page theme, read on the new implementation [`createGlobalStyle`](https://www.styled-components.com/docs/api#createglobalstyle) implementation.

However, I discovered that this is not such a straight-forward thing. Nothing in React is. 😄

#### `TimeAgo`

This is the replacement of the `timeago.js` used in the `ListItem` component. Read more about [react-timeago](https://www.npmjs.com/package/react-timeago).
