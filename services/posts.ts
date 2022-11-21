import { compareDesc } from "date-fns";

import { allArticles } from "contentlayer/generated";
import type { Article } from "contentlayer/generated";

export { Article };
export type ArticleListItem = {
  title: string;
  slug: string;
  tags: string[];
  readingTime: {
    minutes: number;
    words: number;
  };
  publishedAt: string;
  lastUpdatedAt: string;
};
export type ArticleSummary = ArticleListItem & { summary: string };

export function countAll() {
  return allArticles.filter((x) => !x.draft).length;
}

export function get(slug: string) {
  return allArticles.find((x) => x.slug === slug);
}

export function getAll(page = 1, limit = 5): ArticleSummary[] {
  const start = (page - 1) * limit;
  const end = start + limit;
  return allArticles
    .filter((x) => !x.draft)
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    )
    .slice(start, end)
    .map((x) => ({
      title: x.title,
      summary: x.summary,
      slug: x.slug,
      tags: x.tags,
      readingTime: x.readingTime,
      publishedAt: x.publishedAt,
      lastUpdatedAt: x.lastUpdatedAt ?? x.publishedAt,
    }));
}

export function getAllSlug() {
  return allArticles.filter((x) => !x.draft).map((x) => x.slug);
}

export function getAllArchive(): ArticleListItem[] {
  return allArticles
    .filter((x) => !x.draft)
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    )
    .map((x) => ({
      title: x.title,
      slug: x.slug,
      tags: x.tags,
      readingTime: x.readingTime,
      publishedAt: x.publishedAt,
      lastUpdatedAt: x.lastUpdatedAt ?? x.publishedAt,
    }));
}

export function getRelatedPosts(slug: string): ArticleSummary[] {
  const post = get(slug);
  return allArticles
    .filter((x) => !x.draft && x.slug !== slug)
    .filter((x) => x.tags.some((tag) => post?.tags.includes(tag)))
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    )
    .slice(0, 5)
    .map((x) => ({
      title: x.title,
      summary: x.summary,
      slug: x.slug,
      tags: x.tags,
      readingTime: x.readingTime,
      publishedAt: x.publishedAt,
      lastUpdatedAt: x.lastUpdatedAt ?? x.publishedAt,
    }));
}

export function getAllByTag(
  tag: string,
  page = 1,
  limit = 5
): ArticleSummary[] {
  const start = (page - 1) * limit;
  const end = start + limit;
  return allArticles
    .filter((x) => !x.draft)
    .filter((x) => x.tags.includes(tag))
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    )
    .slice(start, end)
    .map((x) => ({
      title: x.title,
      summary: x.summary,
      slug: x.slug,
      tags: x.tags,
      readingTime: x.readingTime,
      publishedAt: x.publishedAt,
      lastUpdatedAt: x.lastUpdatedAt ?? x.publishedAt,
    }));
}

export function countByTag(tag: string) {
  return allArticles.filter((x) => !x.draft).filter((x) => x.tags.includes(tag))
    .length;
}
