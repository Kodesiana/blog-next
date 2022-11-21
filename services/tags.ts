import { allArticles } from "contentlayer/generated";

export function getTags() {
  const tags = allArticles.filter((x) => !x.draft).flatMap((x) => x.tags);
  const data = Object.keys(tags.valueCounts())
    .sort((a, b) => a.localeCompare(b))
    .unique();

  return data;
}

export function getTagsForSidebar(): Array<{ tag: string; count: number }> {
  const tags = allArticles.filter((x) => !x.draft).flatMap((x) => x.tags);
  const data = Object.entries(tags.valueCounts())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag) || b.count - a.count);

  return data;
}
