import type { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../Navigation';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const BlogLayout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="We offer an innovative blog website that helps you share your ideas, stories, and experiences with the world! Our platform is easy to use and provides a safe, secure, and welcoming environment to create content that is meaningful to you. Join us and inspire others!"
        />
      </Head>
      <div className="w-full">
        <nav className="border-b-[1px] border-dark_gray">
          <Navbar />
        </nav>
        <div className="m-auto max-w-[1400px] px-6 md:px-10">{children}</div>
      </div>
    </>
  );
};
