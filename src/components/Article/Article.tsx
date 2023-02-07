import type { Post } from '@prisma/client';
import Image from 'next/image';
import type { FC } from 'react';
import { Icon } from '../Icons';
import { truncateString } from '../../utils/truncateString';
import { estimatedReadingTime } from '../../utils/estimatedReadingTime';
import { parseDate } from '../../utils/parseDate';
import Link from 'next/link';

interface IArticle {
  post: Post & {
    author: {
      name: string | null;
      image: string | null;
    };
  };
}

export const Article: FC<IArticle> = ({ post }) => {
  return (
    <article className="flex flex-col gap-6 border-b-[1px] border-dark_gray py-10 ">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          {post.author.image && (
            <Image
              src={post.author.image}
              alt={`${post.author.name} avatar image`}
              width={40}
              height={40}
              style={{ borderRadius: '50%' }}
            />
          )}

          <div className="flex flex-col">
            <p className="text-sm text-light_gray">
              {post.author.name} •{' '}
              <span className="text-gray">{parseDate(post.createdAt)}</span>
            </p>
            <p className="text-xs text-gray">Founder, teacher & developer</p>
          </div>
        </div>
        <button className="flex items-center gap-2">
          <Icon name={'saveIcon'} />
          <p className="text-gray">save</p>
        </button>
      </div>

      <div className="flex justify-between gap-6">
        <Link
          href={`/${post.slug}`}
          className="flex w-full flex-col gap-2 sm:w-9/12"
        >
          <h2 className="flex flex-col text-2xl text-white">{post.title}</h2>
          <p className="break-words font-serifPro text-base text-gray">
            {truncateString(post.description, 184)}
          </p>
        </Link>
        <Link
          href={`/${post.slug}`}
          className="relative hidden h-full w-3/12 items-center justify-end sm:flex"
        >
          <Image
            src={'/blogpostImage.png'}
            alt={'image'}
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="flex w-full space-x-2 text-sm sm:space-x-4">
        <div className="rounded-full bg-[#171717] py-[1px] px-2">frontend</div>
        <p>
          {post.text
            ? `${estimatedReadingTime(post.text?.length)} min read`
            : '1 min read'}{' '}
        </p>
        <p>-</p>
        <p>based on your profile</p>
      </div>
    </article>
  );
};
