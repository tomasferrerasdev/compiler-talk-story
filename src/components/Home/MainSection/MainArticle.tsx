import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Bookmark } from '@prisma/client';
import { trpc } from '../../../utils/trpc';
import { truncateString } from '../../../utils/truncateString';
import { estimatedReadingTime } from '../../../utils/estimatedReadingTime';
import { parseDate } from '../../../utils/parseDate';
import { BookMark } from '../../ui/BookMark';

interface IArticle {
  post: {
    title: string;
    text: string | null;
    id: string;
    createdAt: Date;
    bookmarks: Bookmark[];
    author: {
      image: string | null;
      name: string | null;
      username: string | null;
    };
    description: string;
    slug: string;
  };
}

export const MainArticle: FC<IArticle> = ({ post }) => {
  const [isBookmarked, setIsBookmarked] = useState(post.bookmarks?.length > 0);

  const bookmarkPost = trpc.post.bookmarkPost.useMutation({
    onSuccess: () => setIsBookmarked(true),
  });

  const removeBookmark = trpc.post.removeBookmark.useMutation({
    onSuccess: () => setIsBookmarked(false),
  });

  return (
    <>
      <article className="flex flex-col gap-6 border-b-[1px] border-dark_gray py-10 ">
        <div className="relative flex w-full justify-between">
          <Link
            className="flex cursor-pointer items-center gap-2"
            href={`/user/${post.author.username}`}
          >
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
                {post.author.name} • <span className="text-gray">{parseDate(post.createdAt)}</span>
              </p>
              <p className="text-xs text-gray">Founder, teacher & developer</p>
            </div>
          </Link>

          {(bookmarkPost.isLoading || removeBookmark.isLoading) && (
            <div role="status" className="absolute -right-[8px] top-[9px]">
              <svg
                aria-hidden="true"
                className="text-gray-200 dark:text-gray-600 mr-2 inline h-4 w-4 animate-spin fill-green-400"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {!bookmarkPost.isLoading &&
            !removeBookmark.isLoading &&
            (isBookmarked ? (
              <BookMark
                onClick={() => {
                  setIsBookmarked((prev) => !prev);
                  removeBookmark.mutate({
                    postId: post.id,
                  });
                }}
                isBookmarked={isBookmarked}
              />
            ) : (
              <BookMark
                onClick={() => {
                  setIsBookmarked((prev) => !prev);
                  bookmarkPost.mutate({
                    postId: post.id,
                  });
                }}
                isBookmarked={isBookmarked}
              />
            ))}
        </div>

        <div className="flex justify-between gap-6">
          <Link href={`/${post.slug}`} className="flex w-full flex-col gap-2 sm:w-9/12">
            <h2 className="flex flex-col text-2xl text-white">{truncateString(post.title, 84)}</h2>
            <p className="break-words font-serifPro text-base text-gray">
              {truncateString(post.description, 184)}
            </p>
          </Link>
          <Link
            href={`/${post.slug}`}
            className="relative hidden h-full w-3/12 items-center justify-end sm:flex"
          >
            <Image src={'/blogpostImage.png'} alt={'image'} width={150} height={150} />
          </Link>
        </div>
        <div className="flex w-full space-x-2 text-sm sm:space-x-4">
          <div className="rounded-full bg-[#171717] py-[1px] px-2">frontend</div>
          <p>{post.text ? `${estimatedReadingTime(post.text?.length)} min read` : '1 min read'} </p>
          <p>-</p>
          <p>based on your profile</p>
        </div>
      </article>
    </>
  );
};
