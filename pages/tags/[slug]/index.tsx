import { GetStaticPropsContext } from "next";

import { PaginationPage } from "components";

import config from "services/config";
import * as posts from "services/posts";
import * as tags from "services/tags";

export type TagsPagePagerProps = {
  articles: posts.ArticleSummary[];
  currentPage: number;
  totalArticles: number;
  currentTag: string;
};

export default function TagsPagePager({
  articles,
  currentPage,
  totalArticles,
  currentTag,
}: TagsPagePagerProps) {
  return (
    <PaginationPage
      articles={articles}
      currentPage={currentPage}
      totalArticles={totalArticles}
      perPage={config.paginate}
      renderPageLink={(page) => `/tags/${currentTag}/page/${page}`}
      firstPageLink={`/tags/${currentTag}`}
    />
  );
}

export function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const articles = posts.getAllByTag(slug, 1, config.paginate);
  const count = posts.countByTag(slug);

  if (!articles.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles,
      totalArticles: count,
      currentPage: 1,
      currentTag: slug,
    },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  let allTags = tags.getTags().map((tag) => `/tags/${tag}`);
  if (config.ssgPartially) {
    allTags = allTags.slice(0, config.ssgPrerender);
  }

  return {
    paths: allTags,
    fallback: "blocking",
  };
}
