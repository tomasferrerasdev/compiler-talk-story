import Image from "next/image";
import { Icon } from "../Icons";

export const Article = () => {
  return (
    <article className="flex flex-col gap-6 border-b-[1px] border-dark_gray py-10 ">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={"/avatar.png"}
            alt={"avatar image"}
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          <div className="flex flex-col">
            <p className="text-sm text-light_gray">
              Zack deRose • <span className="text-gray">Jan 24</span>
            </p>
            <p className="text-xs text-gray">Founder, teacher & developer</p>
          </div>
        </div>
        <button className="flex items-center gap-2">
          <Icon name={"saveIcon"} />
          <p className="text-gray">save</p>
        </button>
      </div>

      <div className="flex justify-between gap-6">
        <div className="flex w-full flex-col gap-2 sm:w-9/12">
          <h2 className="flex flex-col text-2xl text-white">
            Create Your Own tRPC Stackasdasdadasdasdas
          </h2>
          <p className="break-words font-serifPro text-base text-gray">
            Arguably the first tech stack that was called as such was the LAMP
            stack, which was traced back to a 1998 issue of the German computing
            magazine: Computertechnik. LAMP here was an acro...
          </p>
        </div>

        <div className="relative hidden h-full w-3/12 items-center justify-end sm:flex">
          <Image
            src={"/blogpostImage.png"}
            alt={"image"}
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="flex w-full space-x-2 text-sm sm:space-x-4">
        <div className="rounded-full bg-[#171717] py-[1px] px-2">frontend</div>
        <p>2 min read</p>
        <p>-</p>
        <p>based on your profile</p>
      </div>
    </article>
  );
};
