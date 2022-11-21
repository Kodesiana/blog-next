import { GetStaticPropsContext } from "next";

import { PaginationPage } from "components";

import config from "services/config";
import { ArticleSummary, getAll, countAll } from "services/posts";

export type PagePagerProps = {
  articles: ArticleSummary[];
  currentPage: number;
  totalArticles: number;
};

export default function PagePager({
  articles,
  currentPage,
  totalArticles,
}: PagePagerProps) {
  return (
    <PaginationPage
      articles={articles}
      currentPage={currentPage}
      totalArticles={totalArticles}
      perPage={config.paginate}
      renderPageLink={(page) => `/page/${page}`}
      firstPageLink={"/"}
    />
  );
}

export function getStaticProps({ params }: GetStaticPropsContext) {
  const page = Number(params?.page) || 1;
  const articles = getAll(page, config.paginate);

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
      totalArticles: countAll(),
      currentPage: page,
    },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  const totalPages = Math.ceil(countAll() / config.paginate);
  let paths = Array.from({ length: totalPages }, (_, i) => `/page/${i + 2}`);
  if (config.ssgPartially) {
    paths = paths.slice(0, config.ssgPrerender);
  }

  return {
    paths: paths,
    fallback: "blocking",
  };
}
