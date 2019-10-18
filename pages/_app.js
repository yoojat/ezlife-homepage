import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import assign from "core-js/fn/object/assign";
import find from "core-js/fn/array/find";
import entries from "core-js/fn/object/entries";
import values from "core-js/fn/object/values";
import arrayIncludes from "core-js/fn/array/includes";
import includes from "core-js/library/fn/string/includes";

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

    window.onpageshow = function(event) {
      if (event.persisted) {
        console.log("BFCahe로부터 복원됨");
      } else {
        console.log("새로 열린 페이지");
      }
    };

    https: if (!Object.assign) {
      Object.assign = assign;
    }
    if (!Array.find) {
      Array.find = find;
    }
    if (!Object.values) {
      Object.values = values;
    }
    if (!Object.entries) {
      Object.entries = entries;
    }
    if (!String.includes) {
      String.includes = includes;
    }
    if (!Array.includes) {
      Array.includes = arrayIncludes;
    }
  }

  moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    const { Component, pageProps, apollo } = this.props;
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

// const assignDefine = () => {
//   // Must be writable: true, enumerable: false, configurable: true
//   Object.defineProperty(Object, "assign", {
//     value: function assign(target, varArgs) {
//       // .length of function is 2
//       "use strict";
//       if (target == null) {
//         // TypeError if undefined or null
//         throw new TypeError("Cannot convert undefined or null to object");
//       }

//       var to = Object(target);

//       for (var index = 1; index < arguments.length; index++) {
//         var nextSource = arguments[index];

//         if (nextSource != null) {
//           // Skip over if undefined or null
//           for (var nextKey in nextSource) {
//             // Avoid bugs when hasOwnProperty is shadowed
//             if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
//               to[nextKey] = nextSource[nextKey];
//             }
//           }
//         }
//       }
//       return to;
//     },
//     writable: true,
//     configurable: true
//   });
// };
