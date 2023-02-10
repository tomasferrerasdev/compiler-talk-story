import { User } from '@prisma/client';
import Image from 'next/image';
import { FC } from 'react';
import { truncateString } from '../../../utils/truncateString';

type RecommendedPostType = {
  post: {
    author: {
      name: string | null;
      image: string | null;
    };
    title: string;
    description: string;
    createdAt: Date;
  };
};

export const RecommendedPosts: FC<RecommendedPostType> = ({ post }) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex w-full flex-col space-y-2">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.image ? post.author.image : '/avatar.png'}
              alt={'avatar image'}
              width={30}
              height={30}
              style={{ borderRadius: '50%' }}
            />
            <div className="flex flex-col">
              <p className="text-sm text-light_gray">
                {post.author.name} • <span className="text-gray">works in TUXDI</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm font-bold text-white">{post.title}</p>
        <p className="text-xs">{truncateString(post.description, 184)}</p>
      </div>
    </div>
  );
};
