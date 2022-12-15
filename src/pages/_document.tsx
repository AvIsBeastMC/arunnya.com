import * as React from "react";

import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
        <link rel="shortcut icon" href="/images/alt.png" />
        <meta property="og:image" content="/images/banner.jpg" />
        <meta property="twitter:image" content="/images/banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9136061489722919"
     crossOrigin="anonymous"></script>
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default MyDocument;