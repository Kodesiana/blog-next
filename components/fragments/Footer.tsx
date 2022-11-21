import Link from "next/link";
import config from "services/config";

export default function Header() {
  return (
    <footer>
      <div className="container-lg clearfix">
        <div className="col-12 footer">
          <p>
            Semua konten dilisensikan di bawah lisensi{" "}
            <Link rel="license" href={config.licenseLink} target="_blank">
              {config.license}
            </Link>
          </p>
          <span>
            Hak Cipta &copy; {config.copyrightStartYear}-
            {new Date().getFullYear()}&nbsp;
            <Link href="/">{config.author}</Link>&nbsp; | Tema adaptasi dari{" "}
            <Link href="https://github.com/dsrkafuu/hugo-theme-fuji">
              Hugo Theme Fuji
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
