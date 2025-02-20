"use client";

import useFocusRef from "@/app/hooks/useFocusRef";
import { BlogContent } from "@/composites/BlogContent";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const BlogModal = ({ blog }: { blog: Blog }) => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const contentRef = useFocusRef<HTMLDivElement>(() => {
    router.back();
    setOpen(false);
  });

  const handleCloseModal = () => {
    router.back();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 overflow-y-auto p-4 right-0 top-0 z-50 flex bg-black/60 backdrop-blur-sm">
      <div
        ref={contentRef}
        className="relative rounded-xl m-auto bg-background w-full p-6 max-w-[700px]"
      >
        <button
          type="button"
          onClick={handleCloseModal}
          className="absolute flex items-center justify-center right-3 top-3 size-6 rounded-full p-1 transition-colors hover:bg-gray-300"
        >
          <span>x</span>
        </button>
        <BlogContent blog={blog} />
      </div>
    </div>
  );
};
