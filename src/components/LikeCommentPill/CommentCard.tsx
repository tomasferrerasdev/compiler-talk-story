import Image from 'next/image';

export const CommentCard = () => {
  return (
    <div className="h-full w-full border-b-[1px] border-dark_gray py-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={'/avatar.png'}
              alt={'avatar image'}
              width={40}
              height={40}
              style={{ borderRadius: '50%' }}
            />
            <div className="flex flex-col">
              <p className="flex flex-col text-sm text-light_gray">
                Martin Caballero{' '}
                <span className="text-gray">software engineer student</span>
              </p>
            </div>
          </div>

          <p className="text-sm text-gray">Mar 9</p>
        </div>
        <p className="text-sm text-light_gray">
          Please implement useGesture for fuller functionality on mobile and
          desktop.
        </p>
      </div>
    </div>
  );
};
