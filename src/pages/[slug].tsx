import type { NextPage } from 'next';
import { Article, BlogLayout } from '../components';
import { ArticleSection } from '../components/Article/ArticleSection/ArticleSection';

const PostPage: NextPage = () => {
  return (
    <div>
      <ArticleSection />
    </div>
  );
};

export default PostPage;
