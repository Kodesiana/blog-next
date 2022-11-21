import React from "react";
import Link from "next/link";

import ArticleMeta from "./ArticleMeta";

type ArchiveItemProps = {
  title: string;
  slug: string;
  tags: string[];
  readingTime: {
    minutes: number;
    words: number;
  };
  publishedAt: Date;
  lastUpdatedAt: Date;
};

export default function ArchiveItem({
  title,
  slug,
  tags,
  readingTime,
  publishedAt,
  lastUpdatedAt,
}: ArchiveItemProps) {
  return (
    <div className="post">
      <h3 className="post-item post-title-archive">
        <Link href={`/post/${slug}`}>{title}</Link>
      </h3>
      <ArticleMeta
        slug={slug}
        tags={tags}
        readingTime={readingTime}
        publishedAt={publishedAt}
        lastUpdatedAt={lastUpdatedAt}
      />
    </div>
  );
}
