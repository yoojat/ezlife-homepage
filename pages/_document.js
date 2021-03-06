import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { renderPage } = ctx;
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    const initialProps = await Document.getInitialProps(ctx);

    // Step 4: Pass styleTags as a prop
    return { ...initialProps, ...page, styleTags };
  }
  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="삶을 보다 편리하게 만드는 이지라이프입니다"
          />
          <meta
            name="keyword"
            content="레포차일드,장애아동의자,자세유지의자,장애아동용의자,특수의자,유모차형휠체어,휠체어,특수유모차,유모차,틸트,틸팅,가벼움"
          />
          <meta name="author" content="yoojat" />
          <meta name="Distribution" content="ezlife" />
          <meta name="Copyright" content="ezlife" />
          <meta name="robots" content="idnex,follow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="이지라이프" />
          <meta property="og:url" content="https://ezl.co.kr/" />
          <meta
            property="og:image"
            content="https://ezl.co.kr/img/brand/logoWithText.png"
          />
          <meta property="og:description" content="이지라이프" />
          {/* <meta
            name="naver-site-verification"
            content="ef6fc6dcee12c206f322b582b00736e958b4b880"
          /> */}
          <meta name="robots" content="index,follow" />
          <link href="/static/menuStyles.css" rel={"stylesheet"} />
          <link href="/static/styles.css" rel={"stylesheet"} />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/img/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/img/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/img/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/img/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/img/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/img/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/img/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/img/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/img/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/img/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/img/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/img/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/img/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/img/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/static/img/favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>

        <body>
          {/* <Header /> */}
          <Main />
          <NextScript />
          {/* <Footer /> */}
        </body>
      </html>
    );
  }
}
