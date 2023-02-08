import { useState, useCallback } from 'react';
import { BlogLayout } from '../../Layouts';
import { LikeCommentPill } from '../../LikeCommentPill';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { parseDate, trpc } from '../../../utils';
import { SingleArticleSkeleton } from '../..';

export const ArticleSection = () => {
  const router = useRouter();
  const postRoute = trpc.useContext().post;
  const getPost = trpc.post.getPost.useQuery(
    { slug: router.query.slug as string },
    { enabled: !!router.query.slug }
  );
  const { data } = getPost;
  const invalidateCurrentPostPage = useCallback(() => {
    postRoute.getPost.invalidate({ slug: router.query.slug as string });
  }, [postRoute.getPost, router.query.slug]);

  const likePost = trpc.post.likePost.useMutation({
    onSuccess: () => invalidateCurrentPostPage(),
  });
  const dislikePost = trpc.post.dislikePost.useMutation({
    onSuccess: () => invalidateCurrentPostPage(),
  });

  if (!data)
    return (
      <BlogLayout title={'specific post'}>
        <SingleArticleSkeleton />
      </BlogLayout>
    );

  return (
    <>
      <BlogLayout title={'article'}>
        <section className="mx-auto h-full w-full max-w-[1000px] py-10 text-light_gray">
          <div className="flex flex-col gap-y-10">
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={data?.author.image ? data?.author.image : `/pattern.png`}
                  alt={`${data?.author.name} avatar image`}
                  width={40}
                  height={40}
                  style={{ borderRadius: '50%' }}
                />

                <div className="flex flex-col">
                  <p className="text-sm text-light_gray">
                    {data?.author.name} •{' '}
                    <span className="text-gray">
                      {data?.createdAt ? parseDate(data?.createdAt) : null}
                    </span>
                  </p>
                  <p className="text-xs text-gray">
                    Founder, teacher & developer
                  </p>
                </div>
              </div>
              <p>👏 {getPost.data?.likes.length}</p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl">{data?.title}</h1>
              <p className="font-inter text-xl text-gray">
                {data?.description}
              </p>
            </div>
            <div className="relative h-[300px] w-full bg-red-500">
              <Image
                src={
                  'https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                }
                alt={'image'}
                fill
                priority
              />
            </div>
            <div className="flex flex-col">
              <p className="font-serifPro text-lg text-light_gray">
                {data?.text}
              </p>
            </div>
          </div>
        </section>
      </BlogLayout>
      {getPost.data?.likes && getPost.data?.likes.length > 0 ? (
        <LikeCommentPill
          onClick={() => {
            getPost.data?.id && dislikePost.mutate({ postId: getPost.data.id });
          }}
        />
      ) : (
        <LikeCommentPill
          onClick={() => {
            getPost.data?.id && likePost.mutate({ postId: getPost.data.id });
          }}
        />
      )}
    </>
  );
};
