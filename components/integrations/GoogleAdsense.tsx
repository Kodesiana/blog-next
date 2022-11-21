import Script from "next/script";

import config from "../../services/config";

function GoogleAdsense() {
  return (
    <div>
      {/* Google AdSense Auto Ads */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        data-ad-client={`ca-pub-${config.integrations.google_adsense.tracking_id}`}
        strategy="afterInteractive"
      />
    </div>
  );
}

export default GoogleAdsense;
