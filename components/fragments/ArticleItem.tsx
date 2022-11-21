import React from "react";
import Link from "next/link";

import ArticleMeta from "./ArticleMeta";

type ArticleItemProps = {
  title: string;
  summary: string;
  slug: string;
  tags: string[];
  readingTime: {
    minutes: number;
    words: number;
  };
  publishedAt: Date;
  lastUpdatedAt: Date;
};

export default function ArticleItem({
  title,
  summary,
  slug,
  tags,
  readingTime,
  publishedAt,
  lastUpdatedAt,
}: ArticleItemProps) {
  return (
    <div className="post">
      <h2 className="post-item post-title">
        <Link href={`/post/${slug}`}>{title}</Link>
      </h2>
      <ArticleMeta
        slug={slug}
        tags={tags}
        readingTime={readingTime}
        publishedAt={publishedAt}
        lastUpdatedAt={lastUpdatedAt}
      />
      <div
        className="post-item post-summary markdown-body"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></div>
    </div>
  );
}
