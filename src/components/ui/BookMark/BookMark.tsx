import { FC } from 'react';
import { Icon } from '../Icons';

type BookmarkType = {
  onClick: () => void;
  isBookmarked: boolean;
};

export const BookMark: FC<BookmarkType> = ({ onClick, isBookmarked }) => {
  return (
    <>
      {isBookmarked ? (
        <button className="flex items-center gap-2" onClick={onClick}>
          <Icon name={'saveIconFilled'} />
        </button>
      ) : (
        <button className="flex items-center gap-2" onClick={onClick}>
          <Icon name={'saveIcon'} />
        </button>
      )}
    </>
  );
};
