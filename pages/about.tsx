import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <article data-clarity-region="article">
        <h1 className="post-item post-title">
          <Link href={"/about"}>Tentang Penulis</Link>
        </h1>
        <div className="post-content markdown-body">
          <div className="row">
            <div className="col-40">
              <div
                style={{
                  textAlign: "center",
                  maxWidth: "250px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/img/me.jpg"
                  alt="Fahmi Noor Fiqri"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-60">
              Kodesiana.com dirintis pada tanggal 10 April 2018 oleh seorang
              penulis yaitu Fahmi Noor Fiqri yang merupakan{" "}
              <i>software engineer</i> dan juga penggiat <i>data science</i>{" "}
              dengan pengalaman sebagai <i>developer</i> hingga lebih dari 7
              tahun.
              <br />
              <br />
              Penulis saat ini bekerja sebagai <b>backend developer NodeJS</b>
              di <Link href="https://logee.id/">Logee by Telkom Indonesia</Link>
              sejak Oktober 2019 dan diberi kepercayaan sebagai{" "}
              <i>maintainer</i> dan
              <i>lead</i> di ekosistem Logee Control Tower. Selain itu, penulis
              juga suka menulis umumnya di blog ini maupun dalam bentuk buku dan
              penelitian/riset ilmiah. Penulis juga sering berkontribusi pada{" "}
              <i>open source</i>
              melalui akun GitHub penulis.
              <br />
              <br />
              Kamu bisa menghubungi penulis melalui tautan ekternal, utamanya
              melalui Discord penulis. Salam kenal semuanya!
            </div>
          </div>
          <h2>Workstation</h2>
          <p>It ain&apos;t much but honest work.</p>
          <ol>
            <li>Motherboard ASRock BM460M Steel Legend</li>
            <li>Prosesor Intel Core i5-10400 @ 2.90GHz</li>
            <li>MSI RTX 3060 VENTUS 2X OC 12 GB 192-bit</li>
            <li>TEAM ELITE 4x8 GB 1333 MHz</li>
            <li>SSD ADATA SX6000LNP NVMe 512 GB</li>
            <li>HDD WDC WD30EXRZ-22Z5HB0 SATA 3.0 3 TB</li>
            <li>2 x Monitor LG MK420 24&quot; 1080p Full HD</li>
            <li>AOC U28P2U 28&quot; IPS 4K 60Hz</li>
            <li>Logitech G102 LIGHTSYNC</li>
            <li>Keyboard CORSAIR K68</li>
            <li>Speaker Logitech Z120</li>
            <li>Headset dBE GM500</li>
            <li>Mic SOUNDTECH USB Microphone Condenser</li>
            <li>Webcam S-PRO WS-908FHD</li>
          </ol>
        </div>
      </article>
      <div
        className="post-content markdown-body"
        style={{ marginBottom: "20px" }}
      ></div>
    </div>
  );
}
