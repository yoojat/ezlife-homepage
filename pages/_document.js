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
            content="합리적인 가격으로 학습 공간을 이용할 수 있는 공유독서실 블루닷라운지 입니다"
          />
          <meta
            name="keyword"
            content="독서실, 스터디, 학습, 학습공간, 24시, 24시독서실, 24시 독서실, 공유독서실"
          />
          <meta name="author" content="yoojat" />
          <meta name="Distribution" content="creplay" />
          <meta name="Copyright" content="creplay" />
          <meta name="robots" content="idnex,follow" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="블루닷라운지" />
          <meta property="og:url" content="https://bluedotlounge.co.kr/" />

          <meta
            property="og:image"
            content="https://bluedotlounge.co.kr/LogoBlue.png"
          />
          <meta property="og:description" content="블루닷라운지" />
          <meta
            name="naver-site-verification"
            content="ef6fc6dcee12c206f322b582b00736e958b4b880"
          />
          <meta name="robots" content="index,follow" />

          <link href="/static/menuStyles.css" rel={"stylesheet"} />

          <link href="/static/styles.css" rel={"stylesheet"} />

          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}

          {/* <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/img/main/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/img/main/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/img/main/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/img/main/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/img/main/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/img/main/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/img/main/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/img/main/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/img/main/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/img/main/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/img/main/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/img/main/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/img/main/favicon/favicon-16x16.png"
          /> */}
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
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
