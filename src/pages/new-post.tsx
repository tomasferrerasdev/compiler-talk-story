import type { NextPage } from 'next';
import React from 'react';
import { BlogLayout } from '../components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import TextareaAutosize from 'react-textarea-autosize';

type writeForm = {
  title: string;
  description: string;
  body: string;
};

const writeFormSchema = z.object({
  title: z.string().min(3).max(200),
  description: z.string().min(3).max(600),
  body: z.string().min(3).max(6000),
});

const NewPost: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<writeForm>({
    resolver: zodResolver(writeFormSchema),
  });

  const onSubmit = (data: writeForm) => console.log(data);

  return (
    <BlogLayout title={'compilers talk | write'}>
      <section className="mx-auto h-full w-full max-w-[1000px] pt-6">
        <form
          id="postForm"
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-full w-full flex-col"
        >
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
            {...register('body')}
            placeholder="What you're thinking?..."
            className="block w-full resize-none bg-transparent py-6 font-serifPro text-base text-gray placeholder:text-gray focus:outline-none"
          />
        </form>
      </section>
    </BlogLayout>
  );
};

export default NewPost;
