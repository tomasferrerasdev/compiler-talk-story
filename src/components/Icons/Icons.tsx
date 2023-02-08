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
      <mask
        id="mask0_4_15"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="50"
        height="50"
      >
        <path
          d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_4_15)">
        <path d="M56.7791 0H-6.66669V1.92308H56.7791V0Z" fill="white" />
        <path
          d="M56.7791 5.76917H-6.66669V9.61532H56.7791V5.76917Z"
          fill="white"
        />
        <path
          d="M56.7791 13.4615H-6.66669V19.2308H56.7791V13.4615Z"
          fill="white"
        />
        <path
          d="M56.7791 23.0769H-6.66669V30.7691H56.7791V23.0769Z"
          fill="white"
        />
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
const saveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="17"
    height="21"
    viewBox="0 0 17 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.9006 1.25C12.9006 1.11739 12.9539 0.990215 13.0489 0.896447C13.1439 0.802678 13.2728 0.75 13.4071 0.75C13.5415 0.75 13.6704 0.802678 13.7654 0.896447C13.8604 0.990215 13.9137 1.11739 13.9137 1.25V3.75H16.4467C16.581 3.75 16.7099 3.80268 16.8049 3.89645C16.8999 3.99021 16.9533 4.11739 16.9533 4.25C16.9533 4.38261 16.8999 4.50979 16.8049 4.60355C16.7099 4.69732 16.581 4.75 16.4467 4.75H13.9137V7.25C13.9137 7.38261 13.8604 7.50979 13.7654 7.60355C13.6704 7.69732 13.5415 7.75 13.4071 7.75C13.2728 7.75 13.1439 7.69732 13.0489 7.60355C12.9539 7.50979 12.9006 7.38261 12.9006 7.25V4.75H10.3676C10.2333 4.75 10.1044 4.69732 10.0094 4.60355C9.9144 4.50979 9.86103 4.38261 9.86103 4.25C9.86103 4.11739 9.9144 3.99021 10.0094 3.89645C10.1044 3.80268 10.2333 3.75 10.3676 3.75H12.9006V1.25ZM1.75561 5.75C1.75561 5.48478 1.86235 5.23043 2.05236 5.04289C2.24237 4.85536 2.50007 4.75 2.76879 4.75H6.31491C6.44926 4.75 6.57811 4.69732 6.67312 4.60355C6.76812 4.50979 6.82149 4.38261 6.82149 4.25C6.82149 4.11739 6.76812 3.99021 6.67312 3.89645C6.57811 3.80268 6.44926 3.75 6.31491 3.75H2.76879C2.23136 3.75 1.71595 3.96071 1.33594 4.33579C0.955922 4.71086 0.742432 5.21957 0.742432 5.75V19.75C0.742432 19.8429 0.76863 19.9339 0.81809 20.0129C0.867551 20.0919 0.93832 20.1557 1.02247 20.1972C1.10661 20.2387 1.20082 20.2563 1.29451 20.248C1.38821 20.2396 1.47771 20.2057 1.55297 20.15L7.32808 15.75L13.1032 20.15C13.1785 20.2057 13.268 20.2396 13.3617 20.248C13.4554 20.2563 13.5496 20.2387 13.6337 20.1972C13.7178 20.1557 13.7886 20.0919 13.8381 20.0129C13.8875 19.9339 13.9137 19.8429 13.9137 19.75V11.25C13.9137 11.1174 13.8604 10.9902 13.7654 10.8964C13.6704 10.8027 13.5415 10.75 13.4071 10.75C13.2728 10.75 13.1439 10.8027 13.0489 10.8964C12.9539 10.9902 12.9006 11.1174 12.9006 11.25V18.73L7.63204 14.73C7.54435 14.6651 7.43769 14.63 7.32808 14.63C7.21847 14.63 7.11182 14.6651 7.02413 14.73L1.75561 18.73V5.75Z"
      fill="#888888"
    />
  </svg>
);

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

export const Icons = {
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
};
