import { HeartIcon } from "@/components/HeartIcon";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blogs }: { blogs: Blog[] }) {
  return (
    <ul className="flex flex-wrap gap-4 w-full">
      {blogs.map((blog) => (
        <li key={blog.blogId} className="w-full">
          <Link
            href={`/blog/en/${blog.blogId}`}
            className="relative flex bg-gray-200 w-full transition-all group hover:shadow-[4px_4px_4px_0px_rgba(0,_0,_0,_0.2)]"
            scroll={false}
          >
            <Image
              src={`${process.env.STRAPI_BASE_URL}${blog.Thumbnail.url}`}
              alt="Thumbnail"
              width="1000"
              height="1000"
              className="w-[440px] aspect-[3/1.5] object-cover object-left block"
            />
            <div className="flex flex-col gap-2 p-4">
              <h2 className="font-bold transition-all text-2xl group-hover:underline underline-offset-4 group-hover:text-blue-500 text-black">
                {blog.title}
              </h2>
              <p className="text-sm">{blog.description}</p>
              <div className="flex flex-col flex-1 justify-end text-sm text-gray-500">
                <span>{blog.viewTimes} min</span>
                <span className="font-bold">
                  {new Date(blog.date).toLocaleDateString()}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="absolute bottom-4 right-4"
            >
              <HeartIcon className="size-5 stroke-2" />
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
