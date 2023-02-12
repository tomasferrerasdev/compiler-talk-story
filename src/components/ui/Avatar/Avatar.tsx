import Image from 'next/image';
import React from 'react';

type AvatarProps = {
  src: string;
  alt: string;
};

export const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <div>
      <Image src={src} alt={`${alt} avatar`} className="rounded-full" fill />
    </div>
  );
};
