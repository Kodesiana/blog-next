import PaginationPage from "components/fragments/PaginationPage";

import config from "services/config";
import * as posts from "services/posts";

export type HomeProps = {
  count: number;
  currentPage: number;
  articles: posts.ArticleSummary[];
};

export default function Home({ articles, count, currentPage }: HomeProps) {
  return (
    <PaginationPage
      articles={articles}
      currentPage={currentPage}
      totalArticles={count}
      perPage={config.paginate}
      renderPageLink={(page) => `/page/${page}`}
      firstPageLink={"/"}
    />
  );
}

export function getStaticProps() {
  return {
    props: {
      articles: posts.getAll(1, config.paginate),
      count: posts.countAll(),
      currentPage: 1,
    },
  };
}
