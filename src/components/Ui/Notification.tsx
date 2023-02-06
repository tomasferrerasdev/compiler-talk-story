export const Notification = () => {
  return (
    <div className="relative cursor-pointer rounded-full hover:bg-dark_gray">
      <span className="absolute right-0 inline-flex h-3 w-3 animate-ping rounded-full bg-[#1DB954] opacity-75" />
      <span className="absolute right-[2px] top-[2px] inline-flex h-2 w-2 rounded-full bg-[#1DB954]" />
      <button
        className={`flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-[0.5px] border-gray transition duration-200 ease-in-out hover:border-white hover:text-white`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5.33334C12 4.27248 11.5786 3.25506 10.8284 2.50492C10.0783 1.75477 9.06087 1.33334 8 1.33334C6.93913 1.33334 5.92172 1.75477 5.17157 2.50492C4.42143 3.25506 4 4.27248 4 5.33334C4 10 2 11.3333 2 11.3333H14C14 11.3333 12 10 12 5.33334Z"
            stroke="#888888"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.15335 14C9.03614 14.2021 8.86791 14.3698 8.6655 14.4864C8.46309 14.6029 8.2336 14.6643 8.00001 14.6643C7.76643 14.6643 7.53694 14.6029 7.33453 14.4864C7.13212 14.3698 6.96389 14.2021 6.84668 14"
            stroke="#888888"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
