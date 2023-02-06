import Image from 'next/image';
import { BaseButton } from '..';

export const RecommendedUsers = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <Image
        src={'/gradient.png'}
        alt={'avatar image'}
        width={35}
        height={35}
        style={{ borderRadius: '50%', cursor: 'pointer' }}
      />
      <div>
        <p className="text-sm font-bold text-white">Ivan Peuscovich</p>
        <p className="text-xs">
          I’m a 36 year old Irish Front End Engineer in London. I love tech and
          design.
        </p>
      </div>
      <div>
        <BaseButton label={'Follow'} />
      </div>
    </div>
  );
};
