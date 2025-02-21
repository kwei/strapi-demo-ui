import { BlogContent } from "@/composites/BlogContent";
import { getBlogById } from "@/services/getBlogById";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const blog = await getBlogById(id, locale, false);
  if (blog === null) return <div>Blog not found</div>;
  return <BlogContent blog={blog} />;
}
