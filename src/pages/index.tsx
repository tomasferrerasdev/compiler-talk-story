import type { NextPage } from 'next';
import { BlogLayout, MainSection } from '../components';

const HomePage: NextPage = () => {
  return (
    <BlogLayout title={'compilers talk | blog'}>
      <MainSection />
    </BlogLayout>
  );
};

export default HomePage;
