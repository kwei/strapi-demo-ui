import {
  validateHtmlBlock,
  validateMediaBlock,
  validateProsConsBlock,
} from "@/utils/validateDynamicZoneComponentType";
import parser from "html-react-parser";
import Image from "next/image";
import { Fragment } from "react";

const getImageSrc = (uri: string) => {
  return `${process.env.STRAPI_BASE_URL ?? "http://localhost:1337"}${uri}`;
};

export const BlogContent = ({ blog }: { blog: Blog }) => {
  return (
    <div className="w-full px-4 max-w-[726px] flex flex-col items-start">
      <button
        type="button"
        className="rounded-full border border-solid border-gray-500 text-sm px-4 py-1 hover:bg-gray-500 transition-colors hover:text-background"
      >
        {blog.cluster}
      </button>
      <h1 className="my-6 pl-4 text-3xl font-bold pr-10 border-l-4 border-solid border-blue-500">
        {blog.title}
      </h1>
      <div className="flex items-center gap-2 text-sm mb-2">
        <button type="button" className="underline">
          Home
        </button>
        <span>{">"}</span>
        <button type="button" className="underline">
          Blog
        </button>
        <span>{">"}</span>
        <button type="button" className="underline">
          {blog.category}
        </button>
      </div>
      <span className="mb-6 text-sm text-gray-500">
        Last Updated on {new Date(blog.updatedAt).toLocaleDateString()}
      </span>
      <Image
        src={getImageSrc(blog.Thumbnail.url)}
        alt="Thumbnail"
        width="1000"
        height="1000"
        className="object-cover mb-4 aspect-[3/1] mx-auto"
      />
      <div className="flex flex-col gap-4">
        {blog.contentArea.map((content, index) => (
          <Fragment key={`${content.__component}-${index.toString()}`}>
            {validateHtmlBlock(content) && parser(content.content)}
            {validateMediaBlock(content) && (
              <Image
                src={getImageSrc(content.media.url)}
                alt={content.media.name}
                width="1000"
                height="1000"
                className="aspect-video mx-auto"
              />
            )}
            {validateProsConsBlock(content) && (
              <div className="w-full grid grid-cols-2 gap-2">
                <ul className="col-span-1 flex list-disc pl-8 flex-col gap-1 border-4 border-solid border-green-500 rounded-lg p-4">
                  <p className="font-black">Pros</p>
                  {content.pros.map((pro) => (
                    <li key={pro.text}>{pro.text}</li>
                  ))}
                </ul>
                <ul className="col-span-1 flex flex-col pl-8 list-disc gap-1 border-4 border-solid border-red-500 rounded-lg p-4">
                  <p className="font-black">Cons</p>
                  {content.cons.map((con) => (
                    <li key={con.text}>{con.text}</li>
                  ))}
                </ul>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
