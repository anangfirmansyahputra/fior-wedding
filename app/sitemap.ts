import axios from "axios";
import { MetadataRoute } from "next";

type Article = {
  id: string;
  title: string;
  content: string;
  slug: string;
  author: string;
  image: string;
  meta_description: string;
  keyword: string;
  galleries: boolean;
  visible: boolean;
  created_at: string;
  updated_at: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await axios.get(`${process.env.API_URL}/api/articles`);

  const articleEntries: MetadataRoute.Sitemap = data.data.map(
    (article: Article) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/${article.slug}`,
      lastModified: new Date(article.updated_at),
    }),
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
    },
    ...articleEntries,
  ];
}
