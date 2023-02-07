import React from 'react';
import {
  Article,
  ArticleSkeleton,
  BaseButton,
  MainAside,
  PeopleSkeleton,
  RecommendedUsers,
} from '..';
import { trpc } from '../../utils/trpc';
import { Icon } from '../Icons';
import { RecommendedPosts } from '../RecommendedPosts';

export const MainSection = () => {
  const getPosts = trpc.post.getPosts.useQuery();

  const data = getPosts.isLoading ? (
    <ArticleSkeleton />
  ) : (
    getPosts.data?.map((post) => <Article post={post} key={post.id} />)
  );

  return (
    <>
      <main className="col-span-12 flex h-full w-full flex-col lg:col-span-7">
        <div className="flex w-full flex-col space-y-6 border-b border-dark_gray pt-6 pb-6 sm:pt-10">
          <div className="hidden w-full flex-col items-center space-x-4 sm:flex sm:flex-row ">
            <div className="relative flex w-full items-stretch rounded-[5px] border-[1px] border-dark_gray bg-black">
              <span className="absolute z-10 h-full w-8 items-center justify-center rounded bg-transparent py-2 pl-2 ">
                <Icon name={'SearchIcon'} />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="relative w-full rounded-[5px] border-0 bg-transparent px-2 py-2 pl-10 text-sm text-gray placeholder-gray outline-none focus:outline-none"
              />
            </div>
            <div className="flex w-full items-center space-x-2 text-gray sm:justify-end">
              <p>My topics:</p>
              <div className="flex items-center space-x-2">
                <p>Frontend</p>
                <p>NextJS</p>
                <p>tRPC</p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-gray">Articles</p>
            <BaseButton label={'Following'} />
          </div>
        </div>
        <div className=" text-gray">{data}</div>
      </main>
    </>
  );
};
