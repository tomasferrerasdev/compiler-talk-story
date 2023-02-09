import { SetStateAction, useState } from 'react';
import type { FC } from 'react';
import { CommentSidebar } from '../CommentSidebar';

interface ILikeComment {
  onClick: () => void;
  postId: string;
}

export const LikeCommentPill: FC<ILikeComment> = ({ onClick, postId }) => {
  const [effect, setEffect] = useState(false);
  const [showCommentSidebar, setShowCommentSidebar] = useState(false);
  return (
    <>
      <CommentSidebar
        showCommentSidebar={showCommentSidebar}
        setShowCommentSidebar={setShowCommentSidebar}
        postId={postId}
      />
      <div className="fixed bottom-10 z-0 flex w-full items-center justify-center">
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
