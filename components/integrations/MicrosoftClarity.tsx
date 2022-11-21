import Script from "next/script";

import config from "../../services/config";

function MicrosoftClarity() {
  return (
    <div>
      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
            (function (c, l, a, r, i, t, y) {
                c[a] = c[a] || function () {
                    (c[a].q = c[a].q || []).push(arguments)
                };
                t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "${config.integrations.microsoft_clarity.tracking_id}");
        `}
      </Script>
    </div>
  );
}

export default MicrosoftClarity;
