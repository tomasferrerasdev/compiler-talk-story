import Image from 'next/image';
import type { FC } from 'react';

type LogoType = {
  size: number;
};

export const Logo: FC<LogoType> = ({ size }) => {
  return (
    <Image
      src={'/compilers-talk-icon.png'}
      alt={'compilers talk logo'}
      width={size}
      height={size}
      priority
    />
  );
};
