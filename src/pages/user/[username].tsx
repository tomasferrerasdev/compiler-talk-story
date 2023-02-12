import { BlogLayout, Icon } from '../../components';
import { useRouter } from 'next/router';
import { trpc } from '../../utils';
import Image from 'next/image';

const UserPage = () => {
  const router = useRouter();
  const { data } = trpc.user.getUserProfile.useQuery(
    {
      username: router.query.username as string,
    },
    {
      enabled: !!router.query.username,
    }
  );

  return (
    <BlogLayout title={'compilers talk | user'}>
      <div className="flex h-full w-full items-center justify-center">
        <section className="mx-auto h-full w-full max-w-[1000px] flex-col py-10 text-light_gray">
          <div className="relative h-44 w-full rounded-[5px] bg-gradient-to-r from-rose-100 to-teal-100">
            <div className="absolute -bottom-14 left-10">
              <div className="group relative h-28 w-28 rounded-full border-[5px] border-black ">
                <div className="absolute z-10 flex h-full w-full items-center justify-center rounded-full transition duration-200 group-hover:bg-black/40">
                  <label htmlFor="avatarFile" className="hidden cursor-pointer group-hover:block">
                    <Icon name={'EditIcon'} />
                    <input
                      type="file"
                      name="avatarFile"
                      id="avatarFile"
                      className="sr-only"
                      accept="image/*"
                    />
                  </label>
                </div>
                {data?.image && (
                  <Image src={data.image} alt={data.name ?? ''} fill className="rounded-full" />
                )}
              </div>
            </div>
          </div>
          <div>posts</div>
        </section>
      </div>
    </BlogLayout>
  );
};

export default UserPage;
