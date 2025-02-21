import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// https://<your-site>/api/draft?secret=preview-mode&slug=<path>
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const locale = searchParams.get("locale") ?? "en";
  const status = searchParams.get("status") ?? "published";

  if (secret !== "preview-mode" || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  const draft = await draftMode();
  if (status === "draft") {
    draft.enable();
  } else {
    draft.disable();
  }

  redirect(slug + "?locale=" + locale);
}
