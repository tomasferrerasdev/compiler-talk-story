import Image from "next/image";

export const RecommendedPosts = () => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex w-full flex-col space-y-2">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={"/avatar.png"}
              alt={"avatar image"}
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            />
            <div className="flex flex-col">
              <p className="text-sm text-light_gray">
                Zack deRose • <span className="text-gray">works in TUXDI</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm font-bold text-white">
          Create Your Own tRPC Stack
        </p>
        <p className="text-xs">
          Arguably the first tech stack that was called as such was the LAMP
          stack, which was traced back to a 1998 issue of the German computing
          magazine: Computertechnik. LAMP here was an acro...
        </p>
      </div>
    </div>
  );
};
