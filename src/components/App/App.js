import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { colorsDark } from "styles/palette";
import List from "components/List";

import { Wrapper, Title } from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }

  render() {
    const { stories } = this.props;

    return (
      <ThemeProvider theme={colorsDark}>
        <React.Fragment>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <List stories={stories} />
          </Wrapper>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
