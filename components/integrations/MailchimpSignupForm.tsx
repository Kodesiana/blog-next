import Script from "next/script";

import config from "../../services/config";

function MailchimpSignupForm() {
  return (
    <div>
      {/* Mailchimp Signup Form */}
      <Script id="mcjs" strategy="afterInteractive">
        {`
          !function(c,h,i,m,p){
            m=c.createElement(h),
            p=c.getElementsByTagName(h)[0],
            m.async=1,
            m.src=i,
            p.parentNode.insertBefore(m,p)
          }(document,"script","${config.integrations.mailchimp.tracking_path}");
        `}
      </Script>
    </div>
  );
}

export default MailchimpSignupForm;
