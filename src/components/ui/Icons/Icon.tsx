import type { FC } from 'react';
import { Icons } from './Icons';

export type AvailableIcons = keyof typeof Icons;

export type Props = {
  name: AvailableIcons;
} & React.SVGProps<SVGSVGElement>;

export const Icon: FC<Props> = ({ name }) => {
  const Icon = Icons[name];
  return <Icon />;
};
