export const CookieDialog = () => {
  return (
    <section className="fixed left-12 bottom-16 mx-auto max-w-md rounded-[5px] border border-dark_gray bg-black p-4">
      <h2 className="text-gray-800 font-semibold dark:text-white">
        🍪 Cookie Notice
      </h2>

      <p className="mt-4 text-sm text-gray">
        We use cookies to ensure that we give you the best experience on our
        website.{' '}
        <a href="#" className="text-blue-500 hover:underline">
          Read cookies policies
        </a>
        .{' '}
      </p>

      <div className="mt-4 flex shrink-0 items-center justify-between gap-x-4">
        <button className="text-gray-800 dark:hover:text-gray-400 hover:text-gray-600 text-xs underline transition-colors duration-300 focus:outline-none dark:text-white">
          Manage your preferences
        </button>

        <button className="rounded-[5px] px-4 py-2.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-dark_gray focus:outline-none">
          Accept
        </button>
      </div>
    </section>
  );
};
