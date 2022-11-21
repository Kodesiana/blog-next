import "../styles/main.scss";

import "services/polyfills";

import Head from "next/head";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";

import config from "services/config";
import {
  GoogleAdsense,
  GoogleAnalytics,
  MicrosoftClarity,
  MailchimpSignupForm,
  ImageLazyLoad,
} from "components";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {/* SEO */}
      <DefaultSeo {...config.seo} />

      {/* Main App */}
      <Component {...pageProps} />

      {/* Analytics */}
      <GoogleAnalytics />
      <MicrosoftClarity />

      {/* Marketing */}
      <GoogleAdsense />
      {router.pathname !== "/" && <MailchimpSignupForm />}

      {/* Tooling */}
      <ImageLazyLoad />
    </div>
  );
}
