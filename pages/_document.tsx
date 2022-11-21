import { Html, Head, Main, NextScript } from "next/document";

import { Sidebar, SidebarMobile, Header, Footer, Favicon } from "../components";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="utf-8" />
        <meta name="HandheldFriendly" content="True" />
        <meta httpEquiv="Cache-Control" content="no-transform" />
        <meta httpEquiv="Cache-Control" content="no-siteapp" />

        <Favicon />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <body data-theme="auto">
        <Header />
        <main>
          <div className="container-lg clearfix">
            <div className="col-12 col-md-9 float-left content">
              <Main />
            </div>
            <Sidebar />
          </div>
          <SidebarMobile />
        </main>

        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
