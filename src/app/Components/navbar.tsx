import Link from "next/link";
import Image from "next/image";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center flex-wrap">
      {/* Logo */}
      <Link href={"/"}>
        <div className="text-2xl font-bold text-blue-600 mb-4 sm:mb-0">
          MORENT
        </div>
      </Link>
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-gray-400"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11a8 8 0 1 1-16 0a8 8 0 0 1 16 0Zm-2.879 5.121L21 21"
          />
        </svg>
        <input
          type="text"
          placeholder="Search something here"
          className="bg-transparent outline-none text-gray-700 text-sm px-2 w-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-gray-400"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m16.364 7.364l-1.414-1.414M6.636 6.636L5.222 5.222M6.636 17.364l-1.414 1.414M18.364 6.636l-1.414-1.414"
          />
        </svg>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        {/* Heart Icon */}

        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
          <Link href="/wishlist/">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-gray-600 transition duration-200"
                viewBox="0 0 24 24"
                fill="red"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Bell Icon */}
        <div className="relative flex items-center justify-center">
          <Link href={"/notification/"}>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a6 6 0 0 0-6 6v4a2 2 0 0 1-1 1.73L5 14v1h14v-1l-.99-.27A2 2 0 0 1 18 12V8a6 6 0 0 0-6-6Zm0 18a3 3 0 0 0 3-3h-6a3 3 0 0 0 3 3Z" />
              </svg>
            </div>
          </Link>
          <div className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full border-2 border-white"></div>
        </div>

        {/* Gear Icon */}
        <div className="relative flex items-center justify-center">
          <Link href={"/setting/"}>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-gray-500"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </Link>
        </div>


        {/* Profile Icon */}
        <Link href={"/Dashborad/"}>
          <Image
            src="/image1.png" // Add a valid profile image in your public folder
            alt="User"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
        </Link>
        <div className="flex items-center text-black space-x-4">
        <SignedIn >
            <UserButton />
          </SignedIn>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
