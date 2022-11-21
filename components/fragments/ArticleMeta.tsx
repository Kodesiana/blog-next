import React from "react";
import Link from "next/link";

import { format } from "date-fns";

import styles from "./ArticleMeta.module.css";

type ArchiveItemProps = {
  slug: string;
  tags?: string[];
  readingTime?: {
    minutes: number;
    words: number;
  };
  publishedAt: Date;
  lastUpdatedAt: Date;
};

export default function ArchiveItem({
  slug,
  tags,
  readingTime,
  publishedAt,
  lastUpdatedAt,
}: ArchiveItemProps) {
  return (
    <div className="post-item post-meta">
      <span>
        <i className={`gg-calendar-today ${styles.icon_margin}`}></i>
        {format(publishedAt, "dd/MM/yyyy")}
      </span>
      <span>
        <i className={`gg-calendar-next ${styles.icon_margin}`}></i>
        {format(lastUpdatedAt, "dd/MM/yyyy")}
      </span>
      {readingTime && (
        <>
          <span>
            <i className={`gg-file-document ${styles.icon_margin}`}></i>
            {readingTime.words} kata
          </span>
          <span>
            <i className={`gg-time ${styles.icon_margin}`}></i>
            {readingTime.minutes} menit
          </span>
        </>
      )}
      {tags && (
        <span>
          <i className={`gg-hashtag ${styles.icon_margin}`}></i>
          {tags.map((tag) => (
            <>
              <Link key={`${slug}_${tag}`} href={`/tags/${tag}`}>
                {tag}
              </Link>
              &nbsp;
            </>
          ))}
        </span>
      )}
    </div>
  );
}
