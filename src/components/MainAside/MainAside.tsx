import { RecommendedPosts } from '../ui/RecommendedPosts';
import { PeopleSkeleton } from '../ui/Skeletons';

export const MainAside = () => {
  return (
    <aside className="col-start-9 col-end-13 hidden h-full w-full flex-col space-y-8 border-l border-dark_gray pl-6 pt-[45px] text-gray lg:flex">
      <div className="flex flex-col gap-y-4">
        <h3>People you might be interested</h3>
        <div className="flex flex-col space-y-4">
          <PeopleSkeleton />
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
  );
};
