import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <div
        className="404-not-found"
        style={{ fontSize: "2rem", paddingTop: "1.5rem" }}
      >
        <span>Halaman yang Anda cari tidak ditemukan.</span>
      </div>
      <Link href="/">Kembali ke Beranda</Link>
    </>
  );
}
