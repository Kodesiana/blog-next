import { ArchiveItem } from "components";

import { ArticleSummary, getAllArchive } from "services/posts";

export function getStaticProps() {
  return { props: { articles: getAllArchive() } };
}

export type ArchiveProps = {
  articles: ArticleSummary[];
};

export default function Archives({ articles }: ArchiveProps) {
  return (
    <div>
      <p style={{ fontSize: "2rem" }}>
        JUMLAH ARTIKEL: <b>{articles.length}</b>
      </p>
      {articles.map((post) => (
        <ArchiveItem
          key={post.slug}
          title={post.title}
          slug={post.slug}
          tags={post.tags}
          readingTime={post.readingTime}
          publishedAt={new Date(post.publishedAt)}
          lastUpdatedAt={new Date(post.lastUpdatedAt ?? post.publishedAt)}
        />
      ))}
    </div>
  );
}
