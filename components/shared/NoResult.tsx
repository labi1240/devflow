// Importing necessary components and libraries
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

// Defining the TypeScript interface for the component props
interface Props {
  title: string; // Title to be displayed, e.g., 'No results found'
  description: string; // More detailed description or message
  link: string; // URL for the action button
  linkTitle: string; // Text to be displayed on the action button
}

// Functional component for displaying a "No Results Found" type of message
const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      {/* // Image to be shown for light mode users */}
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      {/* // Image to be shown for dark mode users */}
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
      {/* // Heading displaying the title of the no result message */}
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      {/* // Paragraph detailing more about the no result scenario */}
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      {/* // Link wrapper around a Button component for the user to take action,
      typically to try a different search query or post a question */}
      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

// Exporting the component for use in other parts of the application
export default NoResult;
