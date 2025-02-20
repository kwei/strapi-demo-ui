import { generateFieldQueryStr } from "@/utils/generateFieldQueryStr";

export async function getBlogById(id: string) {
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
    "updatedAt"
  ]);
  const populates =
    "populate[Thumbnail][fields]=*&populate[contentArea][populate]=*";
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/blogs?${filters}&${fields}&${populates}`,
  );
  const data = await res.json();
  console.log("res: ", data);
  return data.data ? (data.data[0] as Blog) : null;
}
