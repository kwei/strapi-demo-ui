import { BlogContent } from "@/composites/BlogContent";
import { getBlogById } from "@/services/getBlogById";
import { draftMode } from "next/headers";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const { isEnabled } = await draftMode();
  console.log("Is Draft Mode: ", isEnabled);
  const blog = await getBlogById(id, locale, isEnabled);
  if (blog === null) return <div>Blog not found</div>;
  return <BlogContent blog={blog} />;
}
