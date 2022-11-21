import Script from "next/script";

function ImageLazyLoad() {
  return (
    <div>
      {/* LazySizes and Medium Zoom */}
      <Script
        defer
        src="https://cdnjs.cloudflare.com/ajax/libs/medium-zoom/1.0.6/medium-zoom.min.js"
        integrity="sha512-N9IJRoc3LaP3NDoiGkcPa4gG94kapGpaA5Zq9/Dr04uf5TbLFU5q0o8AbRhLKUUlp8QFS2u7S+Yti0U7QtuZvQ=="
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        defer
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
        integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </div>
  );
}

export default ImageLazyLoad;
