import ArticleItem from "./ArticleItem";
import PaginationButtons from "./PaginationButtons";
import { ArticleSummary } from "services/posts";

export type PaginationPageProps = {
  articles: ArticleSummary[];
  currentPage: number;
  totalArticles: number;
  perPage: number;
  renderPageLink: (page: number) => string;
  firstPageLink: string;
};

export default function PaginationPage({
  currentPage,
  totalArticles,
  perPage,
  articles,
  renderPageLink,
  firstPageLink,
}: PaginationPageProps) {
  return (
    <>
      {articles.map((post) => (
        <ArticleItem
          key={"post_" + post.slug}
          title={post.title}
          summary={post.summary}
          slug={post.slug}
          tags={post.tags}
          readingTime={post.readingTime}
          publishedAt={new Date(post.publishedAt)}
          lastUpdatedAt={new Date(post.lastUpdatedAt)}
        />
      ))}
      <div className="pagination">
        <PaginationButtons
          totalItems={totalArticles}
          currentPage={currentPage}
          itemsPerPage={perPage}
          renderPageLink={renderPageLink}
          firstPageLink={firstPageLink}
        />
      </div>
    </>
  );
}
