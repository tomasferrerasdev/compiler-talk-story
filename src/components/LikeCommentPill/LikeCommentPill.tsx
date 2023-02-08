import { useState } from 'react';
import type { FC } from 'react';

interface ILikeComment {
  onClick: () => void;
}

export const LikeCommentPill: FC<ILikeComment> = ({ onClick }) => {
  const [effect, setEffect] = useState(false);

  return (
    <div className="fixed bottom-10 flex w-full items-center justify-center">
      <div className="flex justify-center rounded-3xl bg-[#F0F0F0] py-2 pl-[22px] pr-6">
        <div
          className={`${
            effect && 'animate-wiggle'
          } relative cursor-pointer select-none text-[22px]`}
          onClick={() => {
            onClick();
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          👏
        </div>
        <div className="ml-3 mr-3 h-8 w-[1px] bg-[#d1d1d1]"></div>
        <div className="flex cursor-pointer select-none items-center justify-center text-[21px]">
          📃
        </div>
      </div>
    </div>
  );
};
