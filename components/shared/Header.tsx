import Link from "next/link";
import Image from "next/image";
import header from "@/Data/header";

const Header: React.FC = () => {
  return (
    <header className="sticky top-40 flex justify-center self-start a-bg-color-brand px-4 md:px-6 w-full h-20 leading-[80px] z-[99999]">
      <div className="flex justify-center items-center h-20 leading-[80px] px-4 md:px-6 w-full">
        <div className="max-w-[1440px] w-full flex items-center justify-between">
          {/* Logo - responsive for different devices */}

          <Link href="/" className="flex items-center h-full">
            <Image
              src="/brickseek-logo-icon-white.png"
              alt="BrickSeek Logo"
              className="md:hidden w-10 h-auto"
              width={40} // Adjust the width property here
              height={40} // Add the height property here
            />
            <Image
              src="/brickseek-logo-white.png"
              alt="BrickSeek Logo"
              className="hidden md:block w-44 h-auto"
              width={176} // Adjust the width property here
              height={40} // Add the height property here
            />
          </Link>
          {/* Primary Navigation */}
          <nav className="hidden xl:flex gap-x-4 2xl:gap-x-6">
            <ul className="flex items-center h-full">
              <li>
                <Link href="/" className="text-white inline-flex items-center">
                  Deals
                  <svg
                    className="ml-1 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Search Form */}
          <form action="/search" method="GET" className="relative">
            <input
              type="search"
              name="q"
              placeholder="Search"
              className="h-11 w-full pr-10 pl-3 rounded"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-3"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1112 0A6 6 0 010 8z"
                ></path>
                <path d="M18 18l-5.5-5.5"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
