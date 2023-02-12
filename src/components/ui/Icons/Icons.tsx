const CompilersLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_4_15)">
      <mask id="mask0_4_15" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
        <path
          d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_4_15)">
        <path d="M56.7791 0H-6.66669V1.92308H56.7791V0Z" fill="white" />
        <path d="M56.7791 5.76917H-6.66669V9.61532H56.7791V5.76917Z" fill="white" />
        <path d="M56.7791 13.4615H-6.66669V19.2308H56.7791V13.4615Z" fill="white" />
        <path d="M56.7791 23.0769H-6.66669V30.7691H56.7791V23.0769Z" fill="white" />
        <path d="M56.7791 34.6153H-6.66669V50H56.7791V34.6153Z" fill="white" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_4_15">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const BellIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
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
);
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="geist-icon"
    fill="none"
    height="20"
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="20"
    color="#888888"
    {...props}
  >
    <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
    <path d="M16 16l4.5 4.5"></path>
  </svg>
);
const saveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 384 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
    </svg>
  );
};
const saveIconFilled = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="#1db954"
      strokeWidth="0"
      viewBox="0 0 384 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
    </svg>
  );
};
const closeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1.3em" width="1.3em" {...props}>
      <path
        fill="#d6d6d6"
        d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
      />
    </svg>
  );
};
const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-300 dark:text-gray-500 mx-3 h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#888"
    strokeWidth="1"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);
const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-300 dark:text-gray-500 mx-3 h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#888"
    strokeWidth="1"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="mx-2 h-6 w-6" viewBox="0 0 40 40" {...props}>
    <path
      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
      fill="#FFC107"
    />
    <path
      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
      fill="#FF3D00"
    />
    <path
      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
      fill="#4CAF50"
    />
    <path
      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
      fill="#1976D2"
    />
  </svg>
);
const LikePlaceholder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    version="1"
    viewBox="0 0 48 48"
    enable-background="new 0 0 48 48"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#FFCDD2"
      d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
    ></path>
  </svg>
);
const Like = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    version="1"
    viewBox="0 0 48 48"
    enable-background="new 0 0 48 48"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#F44336"
      d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
    ></path>
  </svg>
);
const Comment = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    {...props}
    aria-hidden="true"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
    ></path>
  </svg>
);
const SmileyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#7e7e7e" height="1.4em" width="1.4em" {...props}>
    <path d="M8.456 14.494a.75.75 0 011.068.17 3.08 3.08 0 00.572.492A3.381 3.381 0 0012 15.72c.855 0 1.487-.283 1.904-.562a3.081 3.081 0 00.572-.492l.021-.026a.75.75 0 011.197.905l-.027.034c-.013.016-.03.038-.052.063-.044.05-.105.119-.184.198a4.569 4.569 0 01-.695.566A4.88 4.88 0 0112 17.22a4.88 4.88 0 01-2.736-.814 4.57 4.57 0 01-.695-.566 3.253 3.253 0 01-.236-.261c-.259-.332-.223-.824.123-1.084z" />
    <path
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
    />
    <path d="M9 10.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM16.25 12a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
  </svg>
);
const EditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="white"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    height="1.4em"
    width="1.4em"
    {...props}
  >
    <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

export const Icons = {
  EditIcon,
  CompilersLogo,
  BellIcon,
  SearchIcon,
  saveIcon,
  LockIcon,
  MessageIcon,
  GoogleIcon,
  Like,
  LikePlaceholder,
  Comment,
  saveIconFilled,
  closeIcon,
  SmileyIcon,
};
