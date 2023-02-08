import { Fragment, useState } from 'react';
import type { FC } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { Icon } from '../ui';
import { CommentCard } from './CommentCard';

interface ILikeComment {
  onClick: () => void;
}

export const LikeCommentPill: FC<ILikeComment> = ({ onClick }) => {
  const [effect, setEffect] = useState(false);
  const [showCommentSidebar, setShowCommentSidebar] = useState(false);
  return (
    <>
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
              <Dialog.Panel className="relative h-screen w-[450px] border-l-[1px] border-dark_gray bg-black p-6">
                <div className="mb-4 flex w-full items-center justify-between">
                  <p className="text-lg font-semibold text-white">
                    Responses (1)
                  </p>
                  <p
                    className="cursor-pointer font-semibold"
                    onClick={() => setShowCommentSidebar(false)}
                  >
                    <Icon name={'closeIcon'} />
                  </p>
                </div>
                <div className="w-11/12">
                  <CommentCard />
                  <CommentCard />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="fixed bottom-10 z-50 flex w-full items-center justify-center">
        <div className="flex justify-center rounded-3xl bg-[#F0F0F0] py-2 pl-[20px] pr-[22px]">
          <div
            className={`${
              effect && 'animate-wiggle'
            } relative cursor-pointer select-none text-[20px] hover:scale-[1.05] `}
            onClick={() => {
              onClick();
              setEffect(true);
            }}
            onAnimationEnd={() => setEffect(false)}
          >
            👏
          </div>
          <div className="ml-3 mr-3 flex h-8 w-[1px] items-center justify-center ">
            <div className="h-4 w-[1px] bg-light_gray"></div>
          </div>
          <div
            onClick={() => setShowCommentSidebar(!showCommentSidebar)}
            className="flex cursor-pointer select-none items-center justify-center text-[19px]"
          >
            📃
          </div>
        </div>
      </div>
    </>
  );
};
