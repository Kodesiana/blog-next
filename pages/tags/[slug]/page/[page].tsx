import { GetStaticPropsContext } from "next";

import { PaginationPage } from "components";

import config from "services/config";
import * as posts from "services/posts";
import * as tags from "services/tags";

export type PagePagerProps = {
  articles: posts.ArticleSummary[];
  currentPage: number;
  totalArticles: number;
  currentTag: string;
};

export default function PagePager({
  articles,
  currentPage,
  totalArticles,
  currentTag,
}: PagePagerProps) {
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
  const page = Number(params?.page) || 1;
  const articles = posts.getAllByTag(slug, page, config.paginate);
  const count = posts.countByTag(slug);

  if (!articles.length) {
    return {
      notFound: true,
    };
  }

  if (page === 1) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      articles,
      totalArticles: count,
      currentPage: page,
      currentTag: slug,
    },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  let allTags = tags
    .getTags()
    .map((tag) =>
      Array.from({ length: 5 }).map((_, i) => `/tags/${tag}/page/${i + 2}`)
    )
    .flatMap((tag) => tag)
    .slice(0, 10);

  if (config.ssgPartially) {
    allTags = allTags.slice(0, config.ssgPrerender);
  }

  return {
    paths: allTags,
    fallback: "blocking",
  };
}
