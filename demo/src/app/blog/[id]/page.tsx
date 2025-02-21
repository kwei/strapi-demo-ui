import { BlogContent } from "@/composites/BlogContent";
import { getBlogById } from "@/services/getBlogById";
import { draftMode } from "next/headers";

export default async function Page({
  params,
                                     searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ locale: string }>;
}) {
  const { id } = await params;
  const { locale } = await searchParams;
  const { isEnabled } = await draftMode();
  console.log("Is Draft Mode: ", isEnabled);
  const blog = await getBlogById(id, locale, isEnabled);
  if (blog === null) return <div>Blog not found</div>;
  return (
    <main className="w-full flex p-6 max-w-[1080px] justify-between mx-auto">
      <BlogContent blog={blog} />
      <div className="w-[300px]"></div>
    </main>
  );
}
