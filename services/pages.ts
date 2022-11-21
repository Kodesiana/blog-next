import { compareDesc } from "date-fns";

import { allPages } from "contentlayer/generated";
import type { Page } from "contentlayer/generated";

export { Page };
export type PageItem = {
  title: string;
  slug: string;
  publishedAt: string;
  lastUpdatedAt: string;
};

export function countAll() {
  return allPages.length;
}

export function get(slug: string) {
  return allPages.find((x) => x.slug === slug);
}

export function getAll(): PageItem[] {
  return allPages
    .filter((x) => !x.draft)
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    )
    .map((x) => ({
      title: x.title,
      slug: x.slug,
      publishedAt: x.publishedAt,
      lastUpdatedAt: x.lastUpdatedAt ?? x.publishedAt,
    }));
}

export function getAllSlug() {
  return allPages.map((x) => x.slug);
}
