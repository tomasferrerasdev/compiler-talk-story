import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '../ui/Icons';
import { BaseButton, IconButton } from '..';
import { Dropdown } from './Dropdown';

export const Navbar = () => {
  const { data: sessionData, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <div className="m-auto max-w-[1400px] px-6 md:px-10">
      <div className="flex h-full w-full items-center justify-between py-4">
        <Link href={'/'}>
          <Image
            src={'/compilers-talk-icon.png'}
            alt={'compilers talk logo'}
            width={50}
            height={50}
            priority
          />
        </Link>
        {status === 'authenticated' ? (
          <div className="flex items-center gap-6">
            {pathname === '/new-post' ? (
              <button
                type="submit"
                form="postForm"
                className="rounded-full bg-[#198916] py-1 px-4 text-sm font-semibold tracking-wide text-white focus:outline-none"
                value="update"
              >
                publish
              </button>
            ) : (
              <Link href={'/new-post'}>
                <BaseButton label={'Write'} />
              </Link>
            )}

            <div className="flex items-center gap-2 ">
              <div className="relative cursor-pointer rounded-full hover:bg-dark_gray">
                <span className="absolute right-0 inline-flex h-3 w-3 animate-ping rounded-full bg-[#1DB954] opacity-75" />
                <span className="absolute right-0 inline-flex h-3 w-3 rounded-full bg-[#1DB954]" />
                <IconButton ariaLabel="notification bell">
                  <Icon name={'BellIcon'} />
                </IconButton>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                <Image
                  src={'/meAvatar.png'}
                  alt={'avatar image'}
                  width={40}
                  height={40}
                  style={{ borderRadius: '50%', cursor: 'pointer' }}
                  priority
                />
              </button>
              <div
                className={`absolute -right-[23px] ${
                  isOpen ? 'flex' : 'hidden'
                }`}
              >
                <Dropdown />
              </div>
            </div>
          </div>
        ) : (
          <>
            <button onClick={() => signIn()}>
              <BaseButton label={'Sign In'} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
