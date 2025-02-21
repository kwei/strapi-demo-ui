import { generateFieldQueryStr } from "@/utils/generateFieldQueryStr";

export async function getBlogById(
  id: string,
  locale: string,
  isEnabled: boolean,
) {
  const filters = `filters[blogId][$eq]=${id}`;
  const fields = generateFieldQueryStr([
    "documentId",
    "blogId",
    "title",
    "description",
    "category",
    "cluster",
    "lang",
    "show",
    "date",
    "viewTimes",
    "updatedAt",
  ]);
  const populates =
    "populate[Thumbnail][fields]=*&populate[contentArea][populate]=*";
  const isDraft = isEnabled ? "status=draft" : "status=published";
  const url = `${process.env.STRAPI_BASE_URL}/api/blogs?${filters}&${fields}&${populates}&${isDraft}&locale=${locale}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(`${url} -> res: `, data);
  return data.data && data.data.length === 1 ? (data.data[0] as Blog) : null;
}
