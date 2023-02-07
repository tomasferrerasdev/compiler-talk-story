import type { NextPage } from 'next';
import { BlogLayout, Home } from '../components';

const HomePage: NextPage = () => {
  return (
    <BlogLayout title={'compilers talk | blog'}>
      <Home />
    </BlogLayout>
  );
};

export default HomePage;
