interface Blog extends DefaultInfo {
  documentId: string;
  blogId: number;
  title: string;
  description: string;
  category: string;
  cluster: string;
  lang: string;
  Thumbnail: Thumbnail;
  contentArea: DynamicZoneComponentType[];
  show: boolean;
  date: string;
  viewTimes: number;
}

type DynamicZoneComponentType = HTMLContent | MediaContent | ProsConsContent;

interface Thumbnail extends DefaultInfo {
  url: string;
  name: string;
}

interface HTMLContent {
  __component: string;
  content: string;
}

interface MediaContent {
  __component: string;
  media: Thumbnail;
}

interface ProsConsContent {
  __component: string;
  pros: {
    text: string;
  }[];
  cons: {
    text: string;
  }[];
}

interface DefaultInfo {
  documentId: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}
