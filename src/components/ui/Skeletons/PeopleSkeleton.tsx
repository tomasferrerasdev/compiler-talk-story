import React from 'react';

export const PeopleSkeleton = () => {
  return (
    <>
      <div
        role="status"
        className="flex animate-pulse items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="h-[35px] w-[35px] rounded-full bg-dark_gray"></div>
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-dark_gray"></div>
            <div className="h-2 w-32 rounded-full bg-dark_gray"></div>
          </div>
        </div>
        <div className="h-6 w-16 rounded-full bg-dark_gray"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div
        role="status"
        className="flex animate-pulse items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="h-[35px] w-[35px] rounded-full bg-dark_gray"></div>
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-dark_gray"></div>
            <div className="h-2 w-32 rounded-full bg-dark_gray"></div>
          </div>
        </div>
        <div className="h-6 w-16 rounded-full bg-dark_gray"></div>
      </div>
      <div
        role="status"
        className="flex animate-pulse items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="h-[35px] w-[35px] rounded-full bg-dark_gray"></div>
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-dark_gray"></div>
            <div className="h-2 w-32 rounded-full bg-dark_gray"></div>
          </div>
        </div>
        <div className="h-6 w-16 rounded-full bg-dark_gray"></div>
      </div>
      <div className="flex justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-dark_gray"></div>
        <div className="h-2 w-2 rounded-full bg-dark_gray"></div>
        <div className="h-2 w-2 rounded-full bg-dark_gray"></div>
      </div>
    </>
  );
};
