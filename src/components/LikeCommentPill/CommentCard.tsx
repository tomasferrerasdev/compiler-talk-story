import Image from 'next/image';
import { FC } from 'react';
import { parseDate } from '../../utils';

type CommentCardType = {
  comment: {
    user: {
      name: string | null;
      image: string | null;
    };
    text: string;
    createdAt: Date;
  };
};

export const CommentCard: FC<CommentCardType> = ({ comment: { createdAt, text, user } }) => {
  return (
    <div className="h-full w-full border-b-[1px] border-dark_gray py-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={`${user.image}` || '/gradient.png'}
              alt={'avatar image'}
              width={40}
              height={40}
              style={{ borderRadius: '50%' }}
            />
            <div className="flex flex-col">
              <p className="flex flex-col text-sm text-light_gray">
                {user.name} <span className="text-gray">software engineer student</span>
              </p>
            </div>
          </div>

          <p className="text-sm text-gray">{parseDate(createdAt)}</p>
        </div>
        <p className="text-sm text-light_gray">{text}</p>
      </div>
    </div>
  );
};
