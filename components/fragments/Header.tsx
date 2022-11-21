import Link from "next/link";
import config from "services/config";

export default function Header() {
  return (
    <header>
      <div className="container-lg clearfix">
        <div className="col-12 header">
          <Link className="title-main" href="/">
            {config.title}
          </Link>
          <span className="title-sub">{config.subTitle}</span>
        </div>
      </div>
    </header>
  );
}
