import type { FC } from 'react';

type BaseButtonType = {
  label: string;
};

export const BaseButton: FC<BaseButtonType> = ({ label }) => {
  return (
    <div className="rounded-[5px] border-[0.5px] border-gray py-1 px-4 text-gray transition duration-200 ease-in-out hover:border-white hover:text-white">
      {label}
    </div>
  );
};
