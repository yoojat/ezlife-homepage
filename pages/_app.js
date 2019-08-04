import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      nowScrollPosition: 0
    };
  }
  // render되기전에 불리는 함수
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    window.addEventListener("scroll", e => {
      this.setState({
        nowScrollPosition: window.scrollY
      });
    });
  }

  moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    const { Component, pageProps, apollo } = this.props;
    const { nowScrollPosition } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apollo}>
          <Container>
            <Component id={"page-wrap"} {...pageProps} />
          </Container>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

// export default MyApp;
export default withApollo(MyApp);
