import type { FC } from "react";
type Props = {
  children: React.ReactNode;
  ariaLabel?: string;
};

export const IconButton: FC<Props> = ({ children, ariaLabel }) => {
  return (
    <button
      aria-label={ariaLabel ? ariaLabel : "default aria label"}
      className={`flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-[0.5px] border-gray transition duration-200 ease-in-out hover:border-white hover:text-white`}
    >
      {children}
    </button>
  );
};
