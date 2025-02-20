import { BlogContent } from "@/composites/BlogContent";
import { getBlogById } from "@/services/getBlogById";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogById(id);
  if (blog === null) return <div>Blog not found</div>;
  return (
    <main className="w-full flex p-6 max-w-[1080px] justify-between mx-auto">
      <BlogContent blog={blog} />
      <div className='w-[300px]'></div>
    </main>
  );
}
