import BlogCard from "@/composites/BlogCard";
import { generateFieldQueryStr } from "@/utils/generateFieldQueryStr";

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <main className="w-full flex flex-col p-6 max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold mb-6">Featured Articles</h1>
      <BlogCard blogs={blogs} />
    </main>
  );
}

// Fetch data at build time (SSG)
async function getBlogs() {
  const fields = generateFieldQueryStr([
    "documentId",
    "blogId",
    "title",
    "description",
    "show",
    "date",
    "viewTimes",
  ]);
  const populates = "populate=*";
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/blogs?${fields}&${populates}`,
  );
  const data = await res.json();
  return data.data as Blog[];
}

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map(({ blogId }) => ({
    id: blogId.toString(),
  }));
}
