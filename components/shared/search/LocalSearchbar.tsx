"use client";
// Importing necessary UI components and hooks from Next.js and custom utilities
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { usePathname, useRouter, useSearchParams } from 'next/navigation'; // Uncomment these when DB connected
// import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils'; // Uncomment these when DB connected

// Definition of props for LocalSearchbar component, explaining expected types
interface CustomInputProps {
  route: string; // Base URL to navigate after search
  iconPosition: string; // Position of the icon ('left' or 'right')
  imgSrc: string; // Source URL of the icon image
  placeholder: string; // Placeholder text for the input field
  otherClasses?: string; // Optional additional CSS classes for styling
}

// Functional component for a localized search bar, receives props
const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  // const router = useRouter(); // Uncomment this when DB connected
  // const pathname = usePathname(); // Uncomment this when DB connected
  // const searchParams = useSearchParams(); // Uncomment this when DB connected

  // State for the search query, initializes from URL params or empty string
  const [search, setSearch] = useState(""); // Original: searchParams.get('q') || ''

  // useEffect(() => { // Uncomment this block when DB connected
  //   const delayDebounceFn = setTimeout(() => {
  //     if(search) {
  //       const newUrl = formUrlQuery({
  //         params: searchParams.toString(),
  //         key: 'q',
  //         value: search
  //       })
  //       router.push(newUrl, { scroll: false });
  //     } else {
  //       console.log(route, pathname);
  //       if(pathname === route) {
  //         const newUrl = removeKeysFromQuery({
  //           params: searchParams.toString(),
  //           keysToRemove: ['q']
  //         })
  //         router.push(newUrl, { scroll: false });
  //       }
  //     }
  //   }, 300);
  //   return () => clearTimeout(delayDebounceFn);
  // }, [search, route, pathname, router, searchParams]); // Dependencies for useEffect

  // JSX layout for the search bar, including conditions for icon placement
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

// Exporting LocalSearchbar for use in other parts of the application
export default LocalSearchbar;
