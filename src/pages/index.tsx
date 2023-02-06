import type { NextPage } from 'next';
import { BlogLayout } from '../components';

const HomePage: NextPage = () => {
  return (
    <>
      <BlogLayout title={'compilers talk | blog'}>
        <h1>BLOG</h1>
      </BlogLayout>
    </>
  );
};

export default HomePage;
