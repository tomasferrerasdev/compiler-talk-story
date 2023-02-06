import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { BaseButton, Dropdown, Notification } from '../';
import { Logo } from '../Ui/Logo';

export const Navbar = () => {
  const { data, status } = useSession();
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-auto max-w-[1400px] px-6 md:px-10">
      <div className="flex h-full w-full items-center justify-between py-4">
        <Link href={'/'}>
          <Logo size={50} />
        </Link>

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
            <Notification />
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
              className={`absolute -right-[23px] ${isOpen ? 'flex' : 'hidden'}`}
            >
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
