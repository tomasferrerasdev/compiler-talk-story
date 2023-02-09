import { Dispatch, Fragment, SetStateAction } from 'react';
import Image from 'next/image';
import { Transition, Dialog } from '@headlessui/react';
import TextareaAutosize from 'react-textarea-autosize';
import { Icon } from '../ui';
import { CommentCard } from '../LikeCommentPill/CommentCard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { CustomInput } from '..';

type CommentSidebarProps = {
  showCommentSidebar: boolean;
  setShowCommentSidebar: Dispatch<SetStateAction<boolean>>;
  postId: string;
};
export const CommentSchema = z.object({
  text: z.string().min(3),
});
export const CommentSidebar = ({
  showCommentSidebar,
  setShowCommentSidebar,
  postId,
}: CommentSidebarProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<{ text: string }>({
    resolver: zodResolver(CommentSchema),
  });
  const session = useSession();
  const postRoute = trpc.useContext().post;
  const submitComment = trpc.post.createComment.useMutation({
    onSuccess: () => {
      toast.success('🎉');
      postRoute.getComments.invalidate();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const comments = trpc.post.getComments.useQuery({
    postId,
  });

  return (
    <Transition.Root show={showCommentSidebar} as={Fragment}>
      <Dialog onClose={() => setShowCommentSidebar(false)} as="div">
        <div className="fixed right-0 top-0">
          <Transition.Child
            enter="transition duration-500"
            leave="transition duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative h-screen w-full overflow-y-scroll border-l-[1px] border-dark_gray bg-black p-6 sm:w-[450px]">
              <div className="mb-4 flex w-full items-center justify-between">
                <p className="text-lg font-semibold text-white">
                  Responses (5)
                </p>
                <p
                  className="cursor-pointer font-semibold"
                  onClick={() => setShowCommentSidebar(false)}
                >
                  <Icon name={'closeIcon'} />
                </p>
              </div>
              <div className="flex w-full flex-col gap-6 sm:w-11/12">
                <div className="rounded-[5px] border-[1px] border-dark_gray p-4">
                  <Image
                    src={session.data?.user?.image || '/gradient.png'}
                    alt={'avatar image'}
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%' }}
                  />
                  <form
                    onSubmit={handleSubmit((data) => {
                      submitComment.mutate({
                        ...data,
                        postId,
                      });
                    })}
                  >
                    <TextareaAutosize
                      {...register('text')}
                      placeholder="What are your thoughts?"
                      className="block w-full resize-none bg-transparent py-4 text-base text-light_gray placeholder:text-gray focus:outline-none"
                    />
                    <div className="flex h-full w-full justify-end">
                      <button
                        className={`is rounded-full py-1 px-4 text-sm font-semibold tracking-wide focus:outline-none ${
                          isValid
                            ? 'bg-[#198916] text-white'
                            : 'bg-[#699167] text-light_gray'
                        }`}
                      >
                        send
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  {comments.isSuccess &&
                    comments.data.map((comment) => (
                      <CommentCard key={comment.id} comment={comment} />
                    ))}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
