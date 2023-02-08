export const SingleArticleSkeleton = () => {
  return (
    <div
      role="status"
      className="m-auto flex h-full w-full max-w-[1000px] animate-pulse flex-col gap-9 py-10"
    >
      <div className="ju flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-dark_gray"></div>
        <div>
          <div className="mb-1 h-2 w-32 rounded-full bg-dark_gray"></div>
          <div className="h-2 w-24 rounded-full bg-dark_gray"></div>
        </div>
      </div>

      <div
        role="status"
        className="m-auto h-[300px] w-full max-w-[1000px] bg-dark_gray"
      ></div>
      <div>
        <div className="mb-1.5 h-2.5 w-full rounded-full bg-dark_gray"></div>
        <div className="mb-1.5 h-2.5 w-2/3 rounded-full bg-dark_gray"></div>
        <div className="mb-1.5 h-2.5 w-full rounded-full bg-dark_gray"></div>
        <div className="mb-1.5 h-2.5 w-2/3 rounded-full bg-dark_gray"></div>
        <div className="mb-1.5 h-2.5 w-2/3 rounded-full bg-dark_gray"></div>
      </div>
    </div>
  );
};
