import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ThemeProvider } from "styled-components";
import { colorsDark } from "styles/palette";
import GlobalStyles from "styles/globals";
import List from "components/List";
import Loader from "components/Loader";

import { Wrapper, Title } from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  render() {
    const { stories, hasMoreStories } = this.props;

    return (
      <React.Fragment>
        <GlobalStyles />
        <ThemeProvider theme={colorsDark}>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStories}
              loader={<Loader />}
              style={{
                height: "100%",
                overflow: "visible"
              }}
            >
              <List stories={stories} />
            </InfiniteScroll>
          </Wrapper>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
