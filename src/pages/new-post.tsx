import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { BlogLayout, ErrorDialog } from '../components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import TextareaAutosize from 'react-textarea-autosize';
import { trpc } from '../utils/trpc';
import { toast } from 'react-hot-toast';

export type writeForm = {
  title: string;
  description: string;
  text: string;
};

export const writeFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title should have at least 3 characters' })
    .max(200, { message: 'Title should not exceed 200 characters' }),
  description: z
    .string()
    .min(3, { message: 'Description should have at least 3 characters' })
    .max(600, { message: 'Description should not exceed 600 characters' }),
  text: z
    .string()
    .min(3, { message: 'Text should have at least 3 characters' })
    .max(6000, { message: 'Description should not exceed 6000 characters' }),
});

const NewPost: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<writeForm>({
    resolver: zodResolver(writeFormSchema),
  });

  const postRoute = trpc.useContext().post;

  const createPost = trpc.post.createPost.useMutation({
    onSuccess: () => {
      toast.success(
        'Post published with success! Keep spreading your knowledge.'
      );
      reset();
      postRoute.getPosts.invalidate();
      setTimeout(() => {
        router.push('/');
      }, 2000);
    },
  });

  const onSubmit = (data: writeForm) => {
    createPost.mutate(data);
  };

  return (
    <BlogLayout title={'compilers talk | write'}>
      <section className="mx-auto h-full w-full max-w-[1000px] pt-6">
        <form
          id="postForm"
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-full w-full flex-col"
        >
          {errors.title || errors.description || errors.text ? (
            <ErrorDialog errors={errors} />
          ) : null}
          <TextareaAutosize
            {...register('title')}
            placeholder="Title"
            className="block w-full resize-none bg-transparent py-6 font-serifPro text-5xl text-light_gray placeholder:text-gray focus:outline-none"
          />
          <TextareaAutosize
            {...register('description')}
            placeholder="Description"
            className="block w-full resize-none bg-transparent py-6 font-serifPro text-xl text-light_gray placeholder:text-gray focus:outline-none"
          />
          <TextareaAutosize
            {...register('text')}
            placeholder="What you're thinking?..."
            className="block w-full resize-none bg-transparent py-6 font-serifPro text-base text-gray placeholder:text-gray focus:outline-none"
          />
        </form>
      </section>
    </BlogLayout>
  );
};

export default NewPost;
