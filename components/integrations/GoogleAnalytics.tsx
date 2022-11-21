import Script from "next/script";

import config from "../../services/config";

function GoogleAnalytics() {
  return (
    <div>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={
          "https://www.googletagmanager.com/gtag/js?id=" +
          config.integrations.google_analytics.tracking_id
        }
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.integrations.google_analytics.tracking_id}');
        `}
      </Script>
    </div>
  );
}

export default GoogleAnalytics;
