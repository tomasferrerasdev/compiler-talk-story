import React from 'react';
import { Article, BaseButton, RecommendedUsers } from '..';
import { Icon } from '../Icons';
import { RecommendedPosts } from '../RecommendedPosts';

export const MainSection = () => {
  return (
    <>
      <section className="grid h-full w-full grid-cols-12 gap-4">
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
          <div className=" text-gray">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </main>
        <aside className="col-start-9 col-end-13 hidden h-full w-full flex-col space-y-8 border-l border-dark_gray pl-6 pt-[45px] text-gray lg:flex">
          <div className="flex flex-col gap-y-4">
            <h3>People you might be interested</h3>
            <div className="flex flex-col space-y-4">
              <RecommendedUsers />
              <RecommendedUsers />
              <RecommendedUsers />
            </div>
          </div>
          <div className="h-[1px] w-full bg-dark_gray"></div>
          <div className="flex flex-col gap-y-4">
            <h3>Your reading list</h3>
            <div className="flex flex-col space-y-6">
              <RecommendedPosts />
              <RecommendedPosts />
              <RecommendedPosts />
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};
