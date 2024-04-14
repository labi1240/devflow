// Importing necessary libraries and components from next/image, next/link, and react
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Importing a custom component that handles the rendering of tags
import RenderTag from "./RenderTag";

// Import statements for API calls to fetch data, these would be replaced with real estate related API calls
import { getHotQuestions } from "@/lib/actions/question.action";
import { getTopPopularTags } from "@/lib/actions/tag.actions";

// const RightSidebar = async () => {
//   const hotQuestions = await getHotQuestions();
//   const popularTags = await getTopPopularTags();

// RightSidebar functional component definition
const RightSidebar = () => {
  // Static data for hot questions, replace or dynamically fetch real estate questions or highlights
  const hotQuestions = [
    {
      _id: "1",
      title: "How to create a custom hook in React?",
    },
    {
      _id: "2",
      title: 'What is the difference between "==" and "==="?',
    },
    {
      _id: "3",
      title: "How to use Redux in React?",
    },
    {
      _id: "4",
      title: 'What is the difference between "let" and "const"?',
    },
  ];

  // Static data for popular tags, could be replaced with categories like 'Condos', 'Rentals', etc.
  const popularTags = [
    {
      _id: "1",
      name: "React",
      numberOfQuestions: 100,
    },
    {
      _id: "2",
      name: "JavaScript",
      numberOfQuestions: 200,
    },
    {
      _id: "3",
      name: "TypeScript",
      numberOfQuestions: 50,
    },
    {
      _id: "4",
      name: "Node.js",
      numberOfQuestions: 150,
    },
  ];

  // The component returns a structured layout of sections and items using Tailwind CSS for styling
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      {/* // Section for displaying hot questions */}
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      {/* // Section for displaying popular tags, which could be used to show
      property types or features */}
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.numberOfQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting RightSidebar for use in other parts of the application
export default RightSidebar;
